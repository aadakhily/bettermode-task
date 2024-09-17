import { Root as RadixAvatarRoot } from "@radix-ui/react-avatar";

import { cn } from "../../lib/utils";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const AvatarRoot = forwardRef<
  ElementRef<typeof RadixAvatarRoot>,
  ComponentPropsWithoutRef<typeof RadixAvatarRoot>
>(({ className, ...props }, ref) => (
  <RadixAvatarRoot
    ref={ref}
    className={cn(
      "relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));

export default AvatarRoot;
