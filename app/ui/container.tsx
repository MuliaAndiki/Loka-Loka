import { ContainerProps } from '../types/ui';
export default function Container({
  children,
  className,
  as: Tag = 'div',
  onClick,
  ...props
}: ContainerProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
