"use client";

import { BlogPage } from "@/components/Blog";
import BlogTimeline from "@/components/BlogTimeLine";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Blog() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));

  return (
    <Suspense fallback={<div>載入中...</div>}>
      <div>{page ? <BlogPage page={page} /> : <BlogTimeline />}</div>
    </Suspense>
  );
}
