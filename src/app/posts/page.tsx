'use client';

import { Suspense } from 'react';

import { LoadingState } from '@/components/loading';

import PostPageClient from './client';

export default function PostPage() {
  return (
    <Suspense fallback={(
      <div className="flex min-h-screen flex-col">
        <LoadingState />
      </div>
    )}
    >
      <PostPageClient />
    </Suspense>
  );
}
