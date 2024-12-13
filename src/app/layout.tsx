"use client";

import "@/app/globals.css";
import { useEffect } from "react";
import { Suspense } from "react";
import AppHeader from "@/components/Header";
import { LoadingState } from "@/components/loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <title>YuYu1015</title>
      <meta name="description" content="whes1015" />
      <body className="flex min-h-svh flex-col">
        <Suspense fallback={<LoadingState />}>
          <AppHeader />
        </Suspense>
        <main className="flex-1 pb-8">
          <Suspense fallback={<LoadingState />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
