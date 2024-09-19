import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

// Storybook metadata

const meta = {
  title: "UiKit/Typography",
  component: Typography, // The component being documented
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "body", "caption"], // Dropdown for variant
    },
    weight: {
      control: "select",
      options: ["normal", "bold", "light"], // Dropdown for weight
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;
// Default story template for Typography
// const Template: Story = (args) => <Typography {...args} />;

// Default story for body variant

export const Body: Story = {
  args: {
    variant: "body",
    weight: "normal",
    children: "This is a body text.",
  },
};

export const Heading1: Story = {
  args: {
    variant: "h1",
    weight: "bold",
    children: "This is a Heading 1",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    weight: "light",
    children: "This is a caption text.",
  },
};
