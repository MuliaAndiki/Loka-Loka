import Shape from '../ui/shape';

const ChildShape: React.FC = () => {
  return (
    <>
      <Shape className="absolute w-auto h-30 bg-[var(--shapeV1-parent)] inset-0 z-[-4] rounded-b-4xl" />
      <Shape className="absolute w-30 h-15 bg-[var(--shapeV1-child)] rounded-full left-1/2 z-[-3] -translate-y-10 " />
      <Shape className="absolute w-30 h-15 bg-[var(--shapeV1-child)] rounded-full right-1/2 z-[-3] -translate-x-5 translate-y-3" />
      <Shape className="absolute w-30 h-15 border rounded-full left-1/2 z-[-3] -translate-y-8 " />
      <Shape className="absolute w-30 h-15 border rounded-full right-1/2 z-[-3]" />
      <Shape className="absolute w-30 h-15 bg-[var(--shapeV1-child)] rounded-full left-1/2 z-[-3] translate-x-5 translate-y-10" />
      <Shape className="absolute w-30 h-15 border rounded-full left-1/2 z-[-3] translate-x-10 translate-y-8" />
    </>
  );
};

export default ChildShape;
