import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Fallback as RadixAvatarFallback } from "@radix-ui/react-avatar";

import { cn } from "../../lib/utils";

const AvatarFallback = forwardRef<
  ElementRef<typeof RadixAvatarFallback>,
  ComponentPropsWithoutRef<typeof RadixAvatarFallback>
>(({ className, ...props }, ref) => (
  <RadixAvatarFallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-base-200 dark:bg-base-200-dark text-base-100 dark:text-base-content-dark ",
      className
    )}
    {...props}
  />
));

export default AvatarFallback;
