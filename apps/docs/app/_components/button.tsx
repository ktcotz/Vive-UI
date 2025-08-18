import { type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';

const buttonStyles = cva(
  'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring aria-invalid:ring-2 aria-invalid:ring-destructive dark:aria-invalid:ring-destructive/70',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-md hover:bg-destructive/90 focus-visible:ring-destructive/50 dark:focus-visible:ring-destructive/70 dark:bg-destructive/70',
        outline:
          'border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost:
          'bg-transparent hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 has-[>svg]:px-4 text-base',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-sm',
        lg: 'h-12 rounded-md px-7 has-[>svg]:px-5 text-lg',
        icon: 'h-9 w-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
export type TButton = {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  asChild = false,
  ...rest
}: TButton) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={cn(buttonStyles({ variant, size }), className)} {...rest}>
      {children}
    </Comp>
  );
};
