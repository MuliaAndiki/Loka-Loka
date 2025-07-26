import Shape from '../ui/shape';
import { usePathname } from 'next/navigation';

const ProfileShapeHeader: React.FC = () => {
  const pathname = usePathname();

  const hidenShape = ['/profile/tentang-kami'];

  return (
    <nav>
      {!hidenShape.includes(pathname) && (
        <Shape className="w-full h-40  bg-[var(--shapeV1-parent)] absolute z-[-5]  -translate-x-1/2 left-1/2 rounded-b-4xl" />
      )}
    </nav>
  );
};

export default ProfileShapeHeader;
