import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
const PemulihanKataSandiHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Container as="main" className="flex justify-center items-center flex-col">
      <Text>Page Pemulihan Kata Sandi</Text>
      <Image
        alt="Icon"
        src="/asset/recovery.png"
        width={isMobile ? 200 : 300}
        height={isMobile ? 200 : 300}
        className="h-auto object-cover"
      />
    </Container>
  );
};

export default PemulihanKataSandiHeader;
