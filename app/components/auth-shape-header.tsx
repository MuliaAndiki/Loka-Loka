import Shape from "../ui/shape";

const AuthShapeHeader: React.FC = () => {
  return (
    <>
      <Shape className="absolute rounded-full bg-[var(--shape-parent)] left-1/2 -translate-x-1/2 w-full h-100  z-[-5] -translate-y-70" />
      <Shape className="absolute w-50 z-[-4] h-50  bg-[var(--shape-child)] rounded-full left-1/2 -translate-x-10  -translate-y-40" />
      <Shape className="absolute w-55 z-[-3] h-55  border border-[var(--border)] rounded-full left-1/2 -translate-x-13  -translate-y-40" />
      <Shape className="absolute w-50 z-[-4] h-50  bg-[var(--shape-child)] rounded-full left-1/3 -translate-x-20  -translate-y-15" />
      <Shape className="absolute w-55 z-[-3] h-55  border border-[var(--border)] rounded-full left-1/3 -translate-x-23  -translate-y-15" />
    </>
  );
};
export default AuthShapeHeader;
