import { ContainerProps } from '../types/ui';

export default function View({ as: Tag = 'view', children, className, ...prps }: ContainerProps) {
  return <div className={className}>{children}</div>;
}
