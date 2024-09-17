import { forwardRef } from "react";
import { Image as RadixAvatarImage } from "@radix-ui/react-avatar";

import { cn } from "../../lib/utils";

const AvatarImage = forwardRef<
  React.ElementRef<typeof RadixAvatarImage>,
  React.ComponentPropsWithoutRef<typeof RadixAvatarImage>
>(({ className, ...props }, ref) => (
  <RadixAvatarImage
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));

export default AvatarImage;
