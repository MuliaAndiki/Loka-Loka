import { ToolTipProps } from '@/app/types/ui';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/app/ui/tooltip';
import { Text } from '@/app/ui/Text';

export default function UseTooltip({ children, content, ...props }: ToolTipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <Text>{content}</Text>
      </TooltipContent>
    </Tooltip>
  );
}
