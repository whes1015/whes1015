import { HeadingInfo } from "@/modal/BlogInfo";
import { useEffect, useRef } from "react";

export function BlogMenu({ headings }: { headings: HeadingInfo[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState({}, "", `#${id}`);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-[1] relative hidden sm:block" ref={containerRef}>
      <div className="sticky top-3 border-2 border-grey rounded-md p-3">
        <div className="text-lg font-bold mb-2">目錄</div>
        <div className="flex flex-col max-h-[calc(100vh-10rem)] overflow-y-auto">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`cursor-pointer hover:text-blue-500 transition-colors
                  ${
                    heading.level === 1
                      ? "ml-0"
                      : heading.level === 2
                      ? "ml-4"
                      : "ml-8"
                  } 
                  ${
                    heading.level === 1
                      ? "text-base"
                      : heading.level === 2
                      ? "text-sm"
                      : "text-xs"
                  }
                  mb-2
                `}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(heading.id);
              }}
            >
              {heading.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
