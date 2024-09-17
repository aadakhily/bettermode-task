import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta = {
  title: "UiKit/Avatar",
  component: Avatar,

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithImageSrc: Story = {
  args: {
    src: "https://github.com/shadcn.png",
  },
};

export const AvatarWithFallback: Story = {
  args: {
    fallback: "DB",
  },
};
