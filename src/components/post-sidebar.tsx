import slugify from 'slugify';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Sidebar({ content }: { content: string }) {
  const getHeadings = (markdown: string) => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      headings.push({
        level: match[1].length,
        text: match[2],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        id: slugify(match[2], { lower: true }),
      });
    }

    return headings;
  };

  const headings = getHeadings(content);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-xl">目錄</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.id}`}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              onClick={(e) => handleClick(e, heading.id)}
              className={`
                block text-sm transition-colors
                dark:hover:text-blue-400
                hover:text-blue-500
                ${heading.level === 1 ? 'font-semibold' : ''}
                ${heading.level === 2 ? 'ml-4' : ''}
                ${heading.level === 3 ? 'ml-8 text-xs' : ''}
              `}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
