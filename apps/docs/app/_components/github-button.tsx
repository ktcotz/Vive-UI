import Link from "next/link";
import { Button } from "./button";
import { Github } from "lucide-react";

export const GithubButton = () => {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="https://github.com/ktcotz/Vive-UI" target="_blank">
        <Github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </Link>
    </Button>
  );
};
