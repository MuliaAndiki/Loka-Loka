import { SpreedProps } from '../types/ui';
const Spreed: React.FC<SpreedProps> = ({ className, orientation }) => {
  return (
    <div
      className={`
        bg-[var(--border-color,#e5e7eb)] 
        ${orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'} 
        ${className}
      `}
    ></div>
  );
};

export default Spreed;
