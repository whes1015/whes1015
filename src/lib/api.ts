import matter from 'gray-matter';

import { Post } from '@/types/post';

const isProduction = process.env.NODE_ENV === 'production';
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/whes1015/whes1015/main/public';

const baseUrl = isProduction
  ? `${GITHUB_RAW_URL}/blogs`
  : `http://localhost:3000/blogs`;

export async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await fetch(`${baseUrl}/index.json`);
    const posts = await response.json() as Post[];
    return posts;
  }
  catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      return null;
    }

    const url = `${baseUrl}/${slug}.md`;
    const contentResponse = await fetch(url);
    if (!contentResponse.ok) {
      throw new Error(`HTTP error! status: ${contentResponse.status}`);
    }
    const rawContent = await contentResponse.text();

    const { content } = matter(rawContent);

    const cleanContent = content
      .replace(/^---[\s\S]*?---\n/, '')
      .trim();

    return {
      ...post,
      content: cleanContent,
    };
  }
  catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
