import { TextProps } from '../types/ui';
export function Text({ children, className }: TextProps) {
  return <span className={`text-foreground ${className} `}>{children}</span>;
}
