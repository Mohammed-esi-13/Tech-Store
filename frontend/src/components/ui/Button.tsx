import type { ReactNode } from "react";
import cn from "../../lib/cn";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "icon";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn("btn", `btn-${variant}`, `btn-${size}`, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
