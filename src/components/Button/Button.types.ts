import { type VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { buttonStyles } from "./Button.styles";

export type TButton = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;
