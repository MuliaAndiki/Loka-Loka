import Container from "../ui/container";
import { Text } from "../ui/Text";
import Image from "next/image";

const AboutUsChart: React.FC = () => {
  return (
    <Container className="w-full h-full bg-[var(--shapeV1-child)] rounded-sm">
      <Container className="flex justify-center items-center flex-col relative">
        <Image
          className="object-cover h-auto "
          src="/asset/iconFix.png"
          alt="Icon"
          width={300}
          height={300}
        />
        <Text className="font-bold md:text-3xl text-2xl mb-4 absolute bottom-0">
          Version 0.0.1 - CopyRight
        </Text>
      </Container>
    </Container>
  );
};

export default AboutUsChart;
