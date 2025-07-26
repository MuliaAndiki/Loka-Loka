import Shape from '../ui/shape';

const AuthShapeHeader: React.FC = () => {
  return (
    <>
      <Shape className="absolute rounded-full bg-[var(--shapeV1-parent)] left-1/2 -translate-x-1/2 w-140 h-140  z-[-5] -translate-y-73" />
      <Shape className="absolute rounded-full border border-[var(--border)] left-1/2 -translate-x-1/2 w-140 h-140  z-[-4] -translate-y-71" />
      <Shape className="absolute w-70 z-[-4] h-70  bg-[var(--shapeV1-child)] rounded-full left-1/2 -translate-x-1/3  -translate-y-40" />
      <Shape className="absolute w-75 z-[-3] h-75  border border-[var(--border)] rounded-full left-1/2 -translate-x-25  -translate-y-43" />
      <Shape className="absolute w-70 z-[-4] h-70  bg-[var(--shapeV1-child)] rounded-full left-1/2 -translate-x-3/4  -translate-y-20" />
      {/* <Shape className="absolute w-75 z-[-3] h-75  border border-[var(--border)] rounded-full left-1/3 -translate-x-38  -translate-y-20" /> */}
    </>
  );
};
export default AuthShapeHeader;
