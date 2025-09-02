import Link from "next/link";
import { cn } from "@/lib";
import { Logo } from "../logo";
import { NavigationData } from "@/lib/navigation";

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

type HeaderNavProps = {
  children: React.ReactNode;
};

type HeaderNavListProps = {
  items: NavigationData;
};

export const Header = function ({ className, children }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container mx-auto flex min-h-14 items-center px-4">
        {children}
      </div>
    </header>
  );
};

const HeaderNav = ({ children }: HeaderNavProps) => {
  return (
    <nav className="w-full flex gap-3 md:gap-6 items-center">{children}</nav>
  );
};

const HeaderLogo = () => {
  return <Logo />;
};

const HeaderNavList = ({ items }: HeaderNavListProps) => {
  return (
    <ul className="flex items-center gap-3 md:gap-6 text-sm font-medium">
      {items.map(({ id, title, href }) => {
        return (
          <li key={id}>
            <Link
              href={href}
              className="
                relative outline-none
                after:absolute after:left-0 after:bottom-[-2px] 
                after:h-[2px] after:w-0 after:bg-primary 
                after:transition-all after:duration-300 
                hover:after:w-full focus:after:w-full
              "
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const HeaderActions = ({ children }: HeaderNavProps) => {
  return <div className="flex items-center space-x-1">{children}</div>;
};

Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;
Header.HeaderNavList = HeaderNavList;
Header.Actions = HeaderActions;
