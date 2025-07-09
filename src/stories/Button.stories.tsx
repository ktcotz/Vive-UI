import { Button } from '@/components/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Defines the button style variant.',
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: 'Specifies the button size.',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      description:
        'If true, renders the button as a child element (useful for custom components or links).',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      description: 'The content inside the button, typically text or icons.',
      control: 'text',
    },
    onClick: {
      description: 'Click event handler function.',
      action: 'clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile Button component with multiple variants and sizes.\n\n' +
          'Supports rendering as native button or custom components using `asChild` prop.\n\n' +
          'Variants control colors and styles, sizes adjust dimensions and padding.',
      },
    },
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
          aria-hidden="true"
          focusable="false"
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
