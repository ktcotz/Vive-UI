import { Menu, X } from "lucide-react";
import { Button } from "./button";

type HamburgerButtonProps = {
  mobileMenuOpen: boolean;
  toggleMenu: () => void;
};

export const HamburgerButton = ({
  mobileMenuOpen,
  toggleMenu,
}: HamburgerButtonProps) => {
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};
