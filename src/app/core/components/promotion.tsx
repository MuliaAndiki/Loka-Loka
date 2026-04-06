import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import PromotionShapeApp from '@/app/components/promotion-shape';
import { PromotionSchemaProps } from '@/app/types/props';

const Promotion: React.FC<PromotionSchemaProps & { isMobile: boolean }> = ({ data, isMobile }) => {
  return (
    <Container className="w-full min-h-full  ">
      <Container className="bg-[var(--shapeV1-parent)] shadow-md/20 flex justify-between items-center w-full  rounded-md p-3 overflow-hidden z-0 relative ">
        <PromotionShapeApp />
        <Container className="flex justify-start flex-col">
          <Text className="md:text-2xl text-lg font-bold w-full">{data.title}</Text>
          <Text className="text-2xl md:text-lg font-bold">{data.desk}</Text>
        </Container>
        <Container className="flex w-full justify-end items-center">
          <Image
            loading="lazy"
            alt="Foto"
            src={data.image}
            width={isMobile ? 200 : 250}
            height={isMobile ? 200 : 250}
            className="object-cover h-auto cursor-none:"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Promotion;
