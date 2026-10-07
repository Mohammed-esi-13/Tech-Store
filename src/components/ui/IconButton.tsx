import type { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  label: string;
  onClick?: () => void;
};

export default function IconButton({
  children,
  label,
  onClick,
}: IconButtonProps) {
  return (
    <button type="button" aria-label={label} className="icon-btn" onClick={onClick}>
      {children}
    </button>
  );
}
