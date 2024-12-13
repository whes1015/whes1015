"use client";

import { Suspense } from "react";
import { LoadingState } from "@/components/loading";

export default function NotFound() {
  return (
    <Suspense fallback={<LoadingState />}>
      <div className="py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
      </div>
    </Suspense>
  );
}
