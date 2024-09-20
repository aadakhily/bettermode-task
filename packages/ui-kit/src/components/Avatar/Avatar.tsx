import { Fallback, Image, Root } from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

export interface AvatarProps extends VariantProps<typeof avatarStyles> {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  fallbackClassName?: string;
  imageClassName?: string;
}

const avatarStyles = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "w-10 h-10",
        md: "w-14 h-14",
        lg: "w-20 h-20",
        xl: "w-24 h-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Avatar({
  src,
  alt,
  size = "md",
  fallback,
  className,
  imageClassName,
  fallbackClassName,
}: AvatarProps) {
  return (
    <Root className={cn(avatarStyles({ size, className }))}>
      <Image
        src={src}
        alt={alt}
        className={cn("aspect-square h-full w-full", imageClassName)}
      />
      <Fallback
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-neutral dark:bg-neutral-dark text-base-100  ",
          fallbackClassName
        )}
      >
        {fallback}
      </Fallback>
    </Root>
  );
}

export default Avatar;
