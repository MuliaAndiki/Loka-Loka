import { ShapeProps } from '../types/ui';
export default function Shape({ className, as: Tag = 'div', ...props }: ShapeProps) {
  return <div className={`${className}`}></div>;
}
