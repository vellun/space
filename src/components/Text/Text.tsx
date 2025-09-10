import cn from "classnames";
import * as React from "react";

import styles from "./Text.module.scss";

export type TextProps = {
  className?: string;
  view?: "title" | "button" | "p-24" | "p-20" | "p-18" | "p-16" | "p-14" | "p-12";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
  weight?: "normal" | "medium" | "bold";
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
  maxLines?: number;
};

export const Text: React.FC<TextProps> = ({
  className,
  view,
  tag = "p",
  weight,
  color,
  maxLines,
  children,
  ...props
}) => {
  const elementRef = React.useRef<HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (elementRef.current && maxLines !== undefined) {
      elementRef.current.style.setProperty("-webkit-line-clamp", maxLines.toString());
      elementRef.current.style.setProperty("display", "-webkit-box");
    }
  }, [maxLines]);

  const Tag = tag;

  return (
    <Tag
      ref={elementRef}
      className={cn(
        "text",
        styles.text,
        className,
        styles[`text_color-${color}`],
        styles[`text_view-${view}`],
        styles[`text_font-${weight}`]
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
