import type { Meta, StoryObj } from "@storybook/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { Typography } from "../Typography";

interface SheetExample {
  side: "top" | "right" | "bottom" | "left";
}

function SheetExample({ side }: SheetExample) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-neutral p-3 text-base-100 rounded-lg flex items-center justify-center">
          open in {side} side
        </button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>
            <Typography variant={"h3"}>Title</Typography>
          </SheetTitle>

          <SheetDescription>some description for sheet</SheetDescription>
        </SheetHeader>

        <div className="py-7">some content</div>

        <SheetFooter className="flex flex-col">
          <SheetClose className="bg-neutral p-2 text-base-100 rounded-lg flex items-center justify-center">
            close sheet
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const meta = {
  title: "UiKit/Sheet",
  component: SheetExample,
  tags: ["autodocs"],
} satisfies Meta<typeof SheetExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftSide: Story = {
  render: SheetExample,
  args: {
    side: "left",
  },
};
export const RightSide: Story = {
  render: SheetExample,
  args: {
    side: "right",
  },
};
export const TopSide: Story = {
  render: SheetExample,
  args: {
    side: "top",
  },
};
export const BottomSide: Story = {
  render: SheetExample,
  args: {
    side: "bottom",
  },
};
