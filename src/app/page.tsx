import Link from 'next/link';
import { Circle } from 'lucide-react';

import { getAllPosts } from '@/lib/api';
import { Post } from '@/types/post';

export default async function Home() {
  const posts = await getAllPosts();

  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className={`
        mb-12 text-4xl font-bold
        dark:text-white
      `}
      >
        whes1015
      </h1>

      <div className="relative">
        <div className={`
          absolute bottom-0 left-32 top-0 w-0.5 bg-gradient-to-b from-blue-500
          via-blue-400 to-blue-500
          dark:from-blue-400 dark:via-blue-500 dark:to-blue-400
          sm:left-36
        `}
        />

        <div className="space-y-12">
          {sortedPosts.map((post: Post) => (
            <div key={post.slug} className="relative flex">
              <time className={`
                w-32 pt-6 text-left text-sm font-medium text-gray-600
                dark:text-gray-400
                sm:w-36
              `}
              >
                {new Date(post.date).toLocaleDateString('zh-Hant', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>

              <div className={`
                absolute left-32 top-6 -translate-x-1/2 transform
                sm:left-36
              `}
              >
                <Circle
                  className={`
                    h-4 w-4 text-blue-500
                    dark:text-blue-400
                  `}
                  fill="currentColor"
                />
              </div>

              <div className="flex-1 pl-12">
                <article className={`
                  group rounded-lg border border-gray-200 bg-white p-6
                  transition-all
                  dark:border-gray-700 dark:bg-gray-800
                  dark:hover:shadow-gray-700/25
                  hover:shadow-lg
                `}
                >
                  <Link
                    href={{
                      pathname: '/posts',
                      query: { slug: post.slug },
                    }}
                    className="block space-y-3"
                  >
                    <h2 className={`
                      text-2xl font-semibold text-gray-900 transition-colors
                      dark:text-white dark:group-hover:text-blue-400
                      group-hover:text-blue-600
                    `}
                    >
                      {post.title}
                    </h2>
                    <p className={`
                      text-gray-700
                      dark:text-gray-300
                    `}
                    >
                      {post.excerpt}
                    </p>
                  </Link>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
