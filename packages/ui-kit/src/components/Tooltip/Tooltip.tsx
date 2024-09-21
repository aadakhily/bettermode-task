import * as React from "react";
import {
  Root,
  Trigger,
  Provider,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";

import { cn } from "../../lib/utils";

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden bg-base-100 dark:bg-base-100-dark rounded-md border border-base-200 dark:border-base-200-dark bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));

TooltipContent.displayName = Content.displayName;

export {
  Root as Tooltip,
  Arrow as TooltipArrow,
  Trigger as TooltipTrigger,
  Provider as TooltipProvider,
  TooltipContent,
};
