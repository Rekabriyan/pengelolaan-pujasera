import { ElementType, ReactNode } from "react";
import clsx from "clsx";

interface TypographyProps {
  as?: ElementType;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "body-sm"
    | "caption"
    | "label";

  weight?: "normal" | "medium" | "semibold" | "bold";

  color?:
    | "default"
    | "primary"
    | "secondary"
    | "muted"
    | "danger"
    | "success";

  align?: "left" | "center" | "right";

  children: ReactNode;

  className?: string;
}

export default function Typography({
  as,
  variant = "body",
  weight = "normal",
  color = "default",
  align = "left",
  className,
  children,
}: TypographyProps) {
  const Component = as ?? "p";

  return (
    <Component
      className={clsx(
        variantClasses[variant],
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
}

const variantClasses = {
  h1: "text-5xl",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
  body: "text-base",
  "body-sm": "text-sm",
  caption: "text-xs",
  label: "text-sm uppercase tracking-wide",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses = {
  default: "text-gray-900",
  primary: "text-green-600",
  secondary: "text-blue-600",
  muted: "text-gray-500",
  danger: "text-red-600",
  success: "text-green-500",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};