import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({
  children,
  ...rest
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return <button {...rest}>{children}</button>;
};
