import type { Meta, StoryObj } from "@storybook/react";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { Typography } from "../Typography";

interface TooltipExampleProps {
  side: "top" | "right" | "bottom" | "left";
}

function TooltipExample({ side }: TooltipExampleProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent side={side}>
          <Typography>Add to library</Typography>
          <TooltipArrow className="fill-neutral" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const meta = {
  title: "UiKit/Tooltip",
  component: TooltipExample,
  tags: ["autodocs"],
  argTypes: {
    side: {
      options: ["top", "right", "bottom", "left"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof TooltipExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightSide: Story = {
  render: TooltipExample,
  args: {
    side: "right",
  },
};
export const LeftSide: Story = {
  render: TooltipExample,
  args: {
    side: "left",
  },
};

export const TopSide: Story = {
  render: TooltipExample,
  args: {
    side: "top",
  },
};
export const BottomSide: Story = {
  render: TooltipExample,
  args: {
    side: "bottom",
  },
};
