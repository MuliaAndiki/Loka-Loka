import Shape from '../ui/shape';
import Container from '../ui/container';

const ProfileShapeHeader = () => {
  return (
    <Container className="absolute top-0 flex justify-center -translate-y-5 z-[-5] right-0 -translate-x-10">
      <Shape className="absolute w-85 h-85 bg-[var(--shapeV1-parent)] z-[-5] -translate-y-20 rounded-full" />
      <Shape className="absolute w-90 h-90 border -translate-y-20 rounded-full" />
      <Shape className="absolute bg-[var(--shapeV1-child)] w-60 h-60 z-[-4] rounded-full -translate-y-8" />
      <Shape className="absolute border w-63 h-63 z-[-4] rounded-full -translate-y-8" />
    </Container>
  );
};

export default ProfileShapeHeader;
