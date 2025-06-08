import { ContainerType } from "../types/ui";
export default function Container({
  children,
  className,
  as: Tag = "div",
  ...props
}: ContainerType) {
  return <div className={className}>{children}</div>;
}
