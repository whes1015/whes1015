"use client";

import "@/app/globals.css";
import { useEffect } from "react";
import AppHeader from "@/components/Header1";

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
        <AppHeader />
        <main className="flex-1 pb-8">{children}</main>
      </body>
    </html>
  );
}
