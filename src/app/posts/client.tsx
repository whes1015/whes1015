import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import slugify from 'slugify';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPostBySlug } from '@/lib/api';
import { Post } from '@/types/post';
import { Sidebar } from '@/components/post-sidebar';
import { LoadingState } from '@/components/loading';

export default function PostPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!slug) {
      router.push('/');
      return;
    }

    async function fetchPost() {
      try {
        const postData = await getPostBySlug(slug ?? '');

        if (!postData) {
          router.push('/');
          return;
        }

        setPost(postData);
      }
      catch (error) {
        console.error('Error fetching post:', error);
        router.push('/');
      }
      finally {
        setLoading(false);
      }
    }

    void fetchPost();
  }, [slug, router]);

  if (!mounted || loading) {
    return <LoadingState />;
  }

  if (!post) {
    return <LoadingState />;
  }

  return (
    <div className="flex flex-col gap-4">
      <main className="container mx-auto min-h-svh flex-1 px-4 py-8">
        <div className={`
          grid grid-cols-1 gap-4
          lg:grid-cols-4
        `}
        >
          <div className="lg:col-span-3">
            <PostContent
              content={post.content || ''}
              title={post.title}
              date={post.date}
            />
          </div>
          <div className={`
            hidden
            lg:block
          `}
          >
            <Sidebar content={post.content || ''} />
          </div>
        </div>
      </main>
    </div>
  );
}

function PostContent({ content, title, date }: {
  content: string;
  title: string;
  date: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold">{title}</CardTitle>
        <time className="text-sm text-muted-foreground">
          {new Date(date).toLocaleDateString()}
        </time>
      </CardHeader>

      <CardContent className={`
        prose prose-lg max-w-none
        dark:prose-invert
      `}
      >
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ ...props }) => (
              // eslint-disable-next-line @next/next/no-img-element, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              <img {...props} alt={props.alt || ''} className="inline-block" />
            ),
            h1: ({ children }) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
              const id = slugify(children as string, { lower: true });
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              return <h1 id={id}>{children}</h1>;
            },
            h2: ({ children }) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
              const id = slugify(children as string, { lower: true });
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              return <h2 id={id}>{children}</h2>;
            },
            h3: ({ children }) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
              const id = slugify(children as string, { lower: true });
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              return <h3 id={id}>{children}</h3>;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </CardContent>
    </Card>
  );
}
