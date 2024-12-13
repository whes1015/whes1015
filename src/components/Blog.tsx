import { useEffect, useState } from "react";
import { BlogContent } from "./BlogContent";
import { BlogMenu } from "./BlogMenu";
import { HeadingInfo } from "@/modal/BlogInfo";
import { getPostBySlug } from "@/lib/api";
import { LoadingState } from "./loading";
import { Post } from "@/modal/Post";
import { useRouter } from "next/navigation";

export function BlogPage({ page }: { page: string }) {
  const router = useRouter();
  const [headings, setHeadings] = useState<HeadingInfo[]>([]);
  const [mounted, setMounted] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (!page) {
      router.push("/blog");
      return;
    }

    async function fetchPost() {
      try {
        const postData = await getPostBySlug(page ?? "");

        if (!postData) {
          router.push("/blog");
          return;
        }

        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
        router.push("/blog");
      } finally {
        setLoading(false);
      }
    }

    void fetchPost();
  }, [page, router]);

  if (!mounted || loading) {
    return <LoadingState />;
  }

  if (!post) {
    return <LoadingState />;
  }

  return (
    <div className="gap-3 m-3 sm:flex">
      <BlogContent
        content={post.content ?? ""}
        onHeadingsExtracted={setHeadings}
      />
      <BlogMenu headings={headings} />
    </div>
  );
}
