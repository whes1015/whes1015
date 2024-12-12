"use client";

import {
  Home as HomeIcon,
  Book as BookIcon,
  LightMode as SunIcon,
  DarkMode as MoonIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useDarkMode } from "@/hooks/UseDarkMode";
import { Avatar } from "@mui/material";

const NavigationHeader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  const navigationItems = [
    {
      href: "/",
      icon: <HomeIcon className="h-5 w-5" />,
      text: "首頁",
      isActive: pathname == "/",
    },
    {
      href: "/blog",
      icon: <BookIcon className="h-5 w-5" />,
      text: "文章",
      isActive: pathname == "/blog" && !searchParams.size,
    },
  ];

  if (!mounted) return null;

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <nav className="flex gap-2 items-center">
            <Avatar
              className="mr-3"
              alt="User"
              src="https://avatars.githubusercontent.com/u/44525760?v=4"
              sx={{ width: 35, height: 35 }}
            />
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  inline-flex items-center gap-2 rounded-md px-4 py-2
                  transition-colors
                  ${
                    item.isActive
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }
                `}
              >
                {item.icon}
                <span>{item.text}</span>
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleDarkMode}
            className="rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label={isDarkMode ? "切換淺色模式" : "切換深色模式"}
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
