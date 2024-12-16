import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { HeadingInfo } from "@/modal/BlogInfo";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useDarkMode } from "@/hooks/UseDarkMode";
import { InfoBox } from "./InfoBox";
import { customPlugin } from "@/lib/MarkdownPlugin";
import { InfoType } from "@/modal/InfoType";

export function BlogContent({
  content,
  onHeadingsExtracted,
}: {
  content: string;
  onHeadingsExtracted: (headings: HeadingInfo[]) => void;
}) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3");
    const extractedHeadings = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName.charAt(1)),
    }));
    onHeadingsExtracted(extractedHeadings);
  }, [content, onHeadingsExtracted]);

  return (
    <div className="flex-[4] border-2 border-grey rounded-md p-3">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm, customPlugin]}
        components={{
          img: ({ ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              {...props}
              alt={props.alt || ""}
              className="inline-block max-w-full h-auto"
            />
          ),
          h1: ({ node, children }) => (
            <h1
              id={node.position?.start.line.toString()}
              className="text-6xl font-black my-4"
            >
              {children}
            </h1>
          ),
          h2: ({ node, children }) => (
            <h2
              id={node.position?.start.line.toString()}
              className="text-4xl font-bold my-3"
            >
              {children}
            </h2>
          ),
          h3: ({ node, children }) => (
            <h3
              id={node.position?.start.line.toString()}
              className="text-2xl font-medium my-2"
            >
              {children}
            </h3>
          ),
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";

            const isInlineCode =
              node?.position?.start.line === node?.position?.end.line &&
              !language &&
              node?.children?.[0]?.type === "text";

            if (isInlineCode) {
              const codeContent = Array.isArray(children)
                ? children.join("")
                : children;
              return (
                <code
                  className="bg-slate-200 dark:bg-slate-700 px-1.5 rounded text-sm font-mono text-slate-900 dark:text-slate-100"
                  {...props}
                >
                  {codeContent}
                </code>
              );
            }

            const copyToClipboard = (
              e: React.MouseEvent<HTMLButtonElement>
            ) => {
              const button = e.currentTarget;
              const code = String(children).replace(/\n$/, "");
              navigator.clipboard.writeText(code).then(
                () => {
                  button.textContent = "已複製";
                  setTimeout(() => {
                    button.textContent = "複製";
                  }, 2000);
                },
                (err) => {
                  console.error("無法複製文字: ", err);
                }
              );
            };

            return (
              <div className="relative my-4">
                <div className="absolute right-2 top-2 flex gap-2">
                  {language && (
                    <div className="text-xs bg-slate-200/80 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                      {language}
                    </div>
                  )}
                  <button
                    onClick={copyToClipboard}
                    className="text-xs bg-slate-200/80 hover:bg-slate-300/80 dark:bg-slate-700/80 dark:hover:bg-slate-600/80 text-slate-600 dark:text-slate-300 px-2 py-1 rounded transition-colors"
                  >
                    複製
                  </button>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <SyntaxHighlighter
                    language={language}
                    style={isDarkMode ? oneDark : oneLight}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-transparent m-0">{children}</pre>
          ),
          ul: ({ children }) => {
            return (
              <ul className="list-disc list-inside space-y-2 my-4">
                {children}
              </ul>
            );
          },
          li: ({ children, ...props }) => {
            return (
              <li className="ml-2" {...props}>
                {children}
              </li>
            );
          },
          infobox: ({ type, children, ...props }) => {
            return (
              <InfoBox type={type as InfoType} {...props}>
                {children}
              </InfoBox>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
