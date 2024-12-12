'use client';

import { Home, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useDarkMode } from '@/hooks/useDarkMode';

type ButtonVariant = 'default' | 'ghost' | 'link' | 'destructive' | 'outline' | 'secondary';

interface NavigationButton {
  href: string;
  icon: React.JSX.Element;
  text: string;
  variant: (pathname: string) => ButtonVariant;
}

const NavigationHeader = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleDarkMode, mounted } = useDarkMode();

  const commonButtons: NavigationButton[] = [
    {
      href: '/',
      icon: <Home className="h-4 w-4" />,
      text: '首頁',
      variant: (p) => p == '/' ? 'default' : 'ghost',
    },
  ];

  const renderButtons = (isMounted: boolean) =>
    commonButtons.map(({ href, icon, text, variant }) => {
      const ButtonContent = (
        <Button
          variant={variant(pathname)}
          className="flex items-center gap-2"
        >
          {icon}
          {text}
        </Button>
      );

      return isMounted
        ? (
            <Link key={href} href={href}>
              {ButtonContent}
            </Link>
          )
        : (
            <div key={href}>{ButtonContent}</div>
          );
    });

  return (
    <div className="border-b">
      <div className={`
        container mx-auto flex items-center justify-between px-4 py-4
      `}
      >
        <div className="flex space-x-4">
          {renderButtons(mounted)}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? '切換淺色模式' : '切換深色模式'}
        >
          {mounted && isDarkMode
            ? <Sun className="h-5 w-5" />
            : (
                <Moon className="h-5 w-5" />
              )}
        </Button>
      </div>
    </div>
  );
};

export default NavigationHeader;
