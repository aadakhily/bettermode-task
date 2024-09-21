import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "UiKit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "outline", "secondary", "ghost", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    variant: "default",
    children: "hi i am default button",
  },
};
export const secondaryButton: Story = {
  args: {
    variant: "secondary",
    children: "hi i am secondary button",
  },
};
export const ghostButton: Story = {
  args: {
    variant: "ghost",
    children: "hi i am ghost button",
  },
};
export const outlineButton: Story = {
  args: {
    variant: "outline",
    children: "hi i am outline button",
  },
};

export const linkButton: Story = {
  args: {
    variant: "link",
    children: "hi i am link button",
  },
};

export const disabledButton: Story = {
  args: {
    variant: "default",
    disabled: true,
    children: "hi i am disabled",
  },
};
