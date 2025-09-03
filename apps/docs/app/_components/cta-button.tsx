"use client";

import Link from "next/link";
import { useTiltEffect } from "../_hooks/useTiltEffect";
import { Button } from "./button";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

export const CtaButton = ({
  children,
  variant = "default",
  size = "default",
}: CtaButtonProps) => {
  const tilt = useTiltEffect<HTMLAnchorElement>();
  return (
    <Button
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      variant={variant}
      size={size}
      asChild
      className="w-full tilt-card group relative overflow-hidden"
    >
      <Link href="/docs" ref={tilt.ref}>
        {children}
      </Link>
    </Button>
  );
};
