import { Button } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Kliknij mnie!',
    variant: 'default',
    size: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Usuń',
    variant: 'destructive',
    size: 'default',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Dodaj
      </>
    ),
    variant: 'default',
    size: 'sm',
  },
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: <a href="https://example.com">Zobacz więcej</a>,
    variant: 'link',
  },
};
