import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { cn } from "../../lib/utils";

export interface ImageProps {
  src: string;
  alt: string;
  ratio: number;
  className?: string;
  imageClassName?: string;
}

const Image = ({ alt, src, ratio, className, imageClassName }: ImageProps) => {
  return (
    <AspectRatio className={cn(className)} ratio={ratio}>
      <img
        className={cn("h-full w-full object-cover", imageClassName)}
        src={src}
        alt={alt}
        loading="lazy"
      />
    </AspectRatio>
  );
};

export default Image;
