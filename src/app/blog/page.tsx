"use client";

import { BlogPage } from "@/components/Blog";
import { BlogTimeline } from "@/components/BlogTimeLine";
import { LoadingState } from "@/components/loading";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Blog() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));

  return (
    <Suspense fallback={<LoadingState />}>
      <div>{page ? <BlogPage page="test" /> : <BlogTimeline />}</div>
    </Suspense>
  );
}
