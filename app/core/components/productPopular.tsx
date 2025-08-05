import Container from '@/app/ui/container';
import Image from 'next/image';
import { IconStarFilled } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { Text } from '@/app/ui/Text';
import { ProductSchemaProps } from '@/app/types/props';
import { useState } from 'react';
import { IconBookmark } from '@tabler/icons-react';

const ProductPopular: React.FC<ProductSchemaProps> = ({ data }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Container className="flex justify-between items-center p-2 w-full my-2">
      <Image alt="icon" src={data.image} width={100} height={100} className="rounded-lg" />
      <Container className="w-full flex justify-center mx-2 flex-col items-start gap-1">
        <Text className="text-sm font-semibold ">{data.title}</Text>
        <Container className="flex justify-center items-center">
          <IconStarFilled className="text-[#FFD203]" />
          <Text className="font-semibold">{data.rating}</Text>
        </Container>
        <Container className="flex justify-center items-center">
          <IconMapPin className="text-red-500" />
          <Text className="font-semibold">{data.location}</Text>
        </Container>
      </Container>
      <Container className="flex justify-end items-center flex-col gap-1">
        <IconBookmark
          className={`transition-colors duration-200   ${
            isActive ? 'text-[#FFD203]' : 'text-foreground'
          }`}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        />
        <Text className="font-semibold">Rp.{data.pricing}</Text>
      </Container>
    </Container>
  );
};

export default ProductPopular;
