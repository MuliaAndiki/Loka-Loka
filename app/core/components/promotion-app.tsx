import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import PromotionShapeApp from '@/app/components/promotion-shape';
import { PromotionSchemaProps } from '@/app/types/props';

const PromotionApp: React.FC<PromotionSchemaProps> = ({ data }) => {
  return (
    <Container className="w-full min-h-full ">
      <Container className="bg-[var(--shapeV1-parent)] shadow-md/20 flex justify-between items-center w-full  rounded-md p-3 relative overflow-hidden z-0">
        <PromotionShapeApp />
        <Container className="flex justify-start flex-col">
          <Text className="md:text-2xl text-lg font-bold w-full ">{data.title}</Text>
          <Text className="text-3xl md:text-lg font-bold">{data.desk}</Text>
        </Container>
        <Container className="flex w-full">
          <Image
            alt="Foto"
            src={data.image}
            width={60}
            height={60}
            className="object-cover h-auto "
          />
        </Container>
      </Container>
    </Container>
  );
};

export default PromotionApp;
