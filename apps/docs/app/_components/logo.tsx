import { Zap } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Zap className="w-8 h-8 p-1 rounded bg-gradient-to-br from-primary to-secondary" />
      <span className="sr-only">Vive UI library</span>
      <span className="hidden font-bold text-xl sm:inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Vive UI library
      </span>
    </Link>
  );
};
