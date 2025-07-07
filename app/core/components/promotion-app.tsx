import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import PromotionShapeApp from "@/app/components/promotion-shape";

const PromotionApp: React.FC = () => {
  return (
    <Container className="w-full min-h-full">
      <Container className="bg-[var(--shape-parent)] flex justify-between items-center w-full border rounded-md p-3 relative overflow-hidden z-0 ">
        <PromotionShapeApp />
        <Container className="flex justify-start flex-col">
          <Text className="md:text-2xl text-lg font-bold w-full ">
            Halo! Luke Thomp
          </Text>
          <Text className="text-3xl md:text-lg font-bold">
            Eat Gelato Like Theres No Tomorow !
          </Text>
        </Container>
        <Container className="flex border w-full ">
          <Text>AAA</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default PromotionApp;
