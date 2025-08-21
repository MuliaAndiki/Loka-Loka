import Image from 'next/image';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { IconStarFilled } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { BrandHomeSchemaProps } from '@/app/types/props';

const BrandsHome: React.FC<BrandHomeSchemaProps> = ({ data }) => {
  return (
    <Container className="w-full rounded-lg shadow shadow-lg/30 my-2">
      <Container className="flex justify-between items-center p-1 ">
        <Image
          alt="brand"
          src={data.image ? data.image : '/asset/brand.jpeg'}
          width={80}
          height={80}
          className="rounded-lg"
        />
        <Container className="flex justify-center items-start flex-col w-full px-2  ">
          <Text className="text-sm md:text-2xl font-extralight italic">
            {data.promo ? data.promo : 'Kosong'} Promo
          </Text>
          <Container className="flex justify-center items-center gap-2">
            <Text className="text-sm">{data.brand}</Text>
            <IconRosetteDiscountCheckFilled className="text-blue-500" />
          </Container>
          <Container className="flex justify-center items-center gap-1">
            <IconMapPin className="text-red-500" />
            <Text className="font-semibold">{data.location}</Text>
          </Container>
          <Container className="flex justify-center items-center gap-1s">
            <IconStarFilled className="text-[#FFD203]" />
            <Text className="font-semibold">{data.rating} Rating</Text>
          </Container>
        </Container>

        <Image
          alt="Event"
          src={data.secoundImage ? data.secoundImage : '/asset/Events.jpeg'}
          width={80}
          height={80}
          className="rounded-lg object-contain aspect-square "
        />
      </Container>
    </Container>
  );
};

export default BrandsHome;
