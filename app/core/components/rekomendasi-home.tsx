import Container from '../../ui/container';
import { Text } from '../../ui/Text';
import Image from 'next/image';
import { RekomendasiSchemaProps } from '../../types/props';
import Shape from '@/app/ui/shape';
import { ShoppingBasket } from 'lucide-react';

const RekomendasiHome: React.FC<RekomendasiSchemaProps> = ({ data }) => {
  return (
    <Container className="bg-[var(--shapeV1-parent)] py-12 flex justify-center items-center flex-col rounded-lg  w-full relative z-0   ">
      <Shape className="w-20 h-20 rounded-full bg-[var(--border)]  absolute z-[-5] top-0 left-0  blur-md" />
      <Shape className="w-20 h-20 rounded-full bg-[var(--border)]  absolute z-[-5] bottom-0 right-0  blur-md" />
      <Image
        src={data.image}
        alt="Tiket"
        width={120}
        height={120}
        className="object-cover h-auto "
      />
      <Text className="md:text-4xl text-2xl font-bold">{data.title}</Text>
      <Text className="md:text-4xl text-lg italic">{data.organizer}</Text>
      <Text className="md:text-4xl font-extrabold  italic">Rp.{data.price}</Text>
      <Container className=" absolute bottom-0 bg-background w-full h-10 rounded-t-lg z-[-4]">
        <Container className=" flex justify-center items-center h-full gap-1 ">
          <ShoppingBasket />
          <Text className="md:text-4xl text-sm font-extralight">{data.cart}</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default RekomendasiHome;
