import { JSX } from "react";

export interface ContainerType {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface ButtonType {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
