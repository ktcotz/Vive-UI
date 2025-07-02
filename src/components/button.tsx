import { type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./../utils";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
      colorscheme: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "hover:bg-blue-600",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorscheme: "primary",
      size: "md",
    },
  }
);

export type TButton = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = ({
  children,
  variant,
  size,
  colorscheme,
  className,
  ...rest
}: TButton) => {
  return (
    <button
      className={cn(buttonStyles({ variant, size, colorscheme }), className)}
      {...rest}
    >
      {children}
    </button>
  );
};
