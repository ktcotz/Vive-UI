import { cn } from "@/utils";
import { TButton } from "./Button.types";
import { buttonStyles } from "./Button.styles";

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
