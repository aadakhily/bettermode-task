import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta = {
  title: "UiKit/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithImageSrc: Story = {
  args: {
    src: "https://avatar.iran.liara.run/public",
    alt: "this is image",
    size: "md",
    fallback: "Amir",
  },
};

export const AvatarWithFallback: Story = {
  args: {
    fallback: "DB",
    size: "md",
  },
};
