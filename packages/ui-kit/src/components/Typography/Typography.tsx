import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
export interface TypographyProps extends VariantProps<typeof typographyStyles> {
  children: ReactNode;
  className?: string;
}

const typographyStyles = cva(
  "font-sans text-base-content dark:text-base-content-dark",
  {
    variants: {
      variant: {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-semibold",
        body: "text-base",
        caption: "text-sm text-gray-600",
      },
      weight: {
        normal: "font-normal",
        bold: "font-bold",
        light: "font-light",
      },
    },
    defaultVariants: {
      variant: "body",
      weight: "normal",
    },
  }
);

const tagMap: Record<string, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "span",
};

function Typography({
  variant = "body",
  weight,
  children,
  className,
}: TypographyProps) {
  const Tag = tagMap[variant!] || "p";

  const typographyClassName = cn(
    typographyStyles({
      variant,
      weight,
      className,
    })
  );

  return (
    <Tag className={typographyClassName}>
      {children}
      <div className="text-"></div>
    </Tag>
  );
}
export default Typography;
