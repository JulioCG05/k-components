import { ReactNode } from "react";

export interface SidebarProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

export interface SidebarItemProps {
  icon?: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}
