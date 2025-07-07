import { JSX } from "react";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface ShapeProps {
  className: string;
  as?: keyof JSX.IntrinsicElements;
}
export interface ButtonType {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface TextProps {
  className?: string;
  children: React.ReactNode;
}

export interface SidebarProps {
  title: string;
  href: string;
  icon: any;
}

export interface DropdownProps {
  Keluar: {
    title: string;
    href: string;
  };
  Pengaturan: {
    title: string;
    href: string;
  };
}
