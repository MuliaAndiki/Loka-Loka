import { ContainerProps } from '../types/ui';
export default function Container({
  children,
  className,
  as: Tag = 'div',
  ...props
}: ContainerProps) {
  return <div className={className}>{children}</div>;
}
