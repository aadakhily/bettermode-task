import type { Meta, StoryObj } from "@storybook/react";

import Image from "./Image";

const meta = {
  title: "UiKit/Image",
  component: Image,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    src: "https://picsum.photos/200/300",
    ratio: 300 / 200,
    alt: "this is an image",
  },
};
