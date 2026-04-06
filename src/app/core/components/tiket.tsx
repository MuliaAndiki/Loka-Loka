import Container from '../../ui/container';
import { Text } from '../../ui/Text';
import Image from 'next/image';
import { TiketSchemaProps } from '../../types/props';
import Shape from '@/app/ui/shape';
import { ShoppingBasket } from 'lucide-react';

const Tiket: React.FC<TiketSchemaProps> = ({ data }) => {
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
      <Text className=" text-2xl font-bold">{data.title}</Text>
      <Text className=" text-lg italic">{data.organizer}</Text>
      <Text className=" font-extrabold  italic">Rp{data.price.toLocaleString('id-ID')}</Text>
      <Container className=" absolute bottom-0 bg-background w-full h-10 rounded-t-lg z-[-4]">
        <Container className=" flex justify-center items-center h-full gap-1 ">
          <ShoppingBasket />
          <Text className=" text-xs font-bold">{data.cart}</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Tiket;
