import Shape from '@/app/ui/shape';
const PromotionShapeApp: React.FC = () => {
  return (
    <>
      <Shape className="absolute w-17 h-17 rounded-full bg-[var(--border)] z-[-4] left-0 -translate-x-1/3 -translate-y-3/4" />
      <Shape className="absolute w-20 h-20 z-[-4] bg-[var(--border)] rounded-full -right-6 -translate-x-1/12 -translate-y-5/6" />
      <Shape className="absolute w-25 h-25 z-[-4] bg-[var(--border)] rounded-full blur-lg -translate-x-1/12 right-1/3 -translate-y-2/3" />
      <Shape className="absolute w-30 h-30 z-[-4] bg-[var(--border)] rounded-full blur-lg -right-16 -bottom-10 -translate-x-1/4 " />
    </>
  );
};

export default PromotionShapeApp;
