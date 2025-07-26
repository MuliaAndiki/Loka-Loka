import Shape from '../ui/shape';
const HomeShapeHeaderV1: React.FC = () => {
  return (
    <>
      <Shape className="absolute w-140 h-140 bg-[var(--shapeV1-parent)] rounded-full z-[-5] right-0-1/2 -translate-x-1/3 -translate-y-50" />
      <Shape className="absolute w-100 h-100 bg-[var(--shapeV1-child)] rounded-full z-[-5] right-0-1/2 -translate-x-1/4 -translate-y-30 " />
      <Shape className="absolute w-113 h-113 rounded-full border border-[var(--border)] z-[-4] right-0-1/2 -translate-x-1/4 -translate-y-35 " />
    </>
  );
};

export default HomeShapeHeaderV1;
