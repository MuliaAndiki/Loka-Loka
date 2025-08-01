import Container from '@/app/ui/container';
import Image from 'next/image';
import { Text } from '@/app/ui/Text';
const TentangKamiHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Container as="main" className="w-full p-4">
      <Container className="w-full h-full bg-[var(--shapeV1-child)] rounded-sm">
        <Container className="flex justify-center items-center flex-col relative">
          <Image
            className="object-cover h-auto "
            src="/asset/iconFix.png"
            alt="Icon"
            width={isMobile ? 300 : 400}
            height={isMobile ? 300 : 400}
          />
          <Text className="font-bold md:text-3xl text-2xl mb-4 absolute bottom-0">
            Version 0.0.1 - CopyRight
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default TentangKamiHeader;
