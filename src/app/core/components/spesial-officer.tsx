import { IconRosetteDiscountCheckFilled, IconStarFilled } from '@tabler/icons-react';
import Container from '@/app/ui/container';
import Image from 'next/image';
import { Text } from '@/app/ui/Text';
import { SpesialOfficerProps } from '@/app/types/props';

const SpesialOfficer: React.FC<SpesialOfficerProps & { isMobile?: boolean }> = ({
  data,
  isMobile,
}) => {
  return (
    <Container className="w-full flex justify-center items-center  p-2  h-auto rounded-lg flex-col">
      <Image
        src={data.image}
        alt="banner"
        width={isMobile ? 400 : 900}
        height={isMobile ? 400 : 900}
        className="object-center rounded-t-lg"
      />
      <Container className="flex justify-start items-center w-full gap-2 bg-[var(--shapeV1-parent)] border rounded-b-lg p-1 mb-2">
        <Container className="w-auto h-auto rounded-full  ">
          <Image
            alt="brand"
            src={data.secoundImage}
            width={70}
            height={70}
            className="p-2 rounded-full border"
          />
        </Container>

        <Container className="flex justify-center items-start flex-col">
          <Text className="text-2xl font-bold">{data.title}</Text>
          <Container className="flex justify-center items-center gap-1">
            <Text className="font-light text-xs">{data.brands}</Text>
            <IconRosetteDiscountCheckFilled className="text-blue-500 scale-90" />
          </Container>
          <Container className="flex justify-center items-center gap-1s">
            <IconStarFilled className="text-[#FFD203] scale-90 " />
            <Text className="font-semibold">{data.rating} Rating</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default SpesialOfficer;
