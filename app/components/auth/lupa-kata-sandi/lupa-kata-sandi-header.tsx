import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';

const LupaKataSandiHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Container as="main" className="w-full justify-center items-center flex flex-col">
      <Text className="font-bold text-lg md:text-2xl">Lupa Kata Sandi?</Text>
      <Text className="text-sm md:text-2xl">
        Mohon Masukan Email Kamu Untuk Melakukan Pemulihan
      </Text>
      <Image
        className="object-cover h-auto"
        src="/asset/Lupa.png"
        alt="Icon"
        width={isMobile ? 300 : 400}
        height={isMobile ? 300 : 400}
      />
    </Container>
  );
};

export default LupaKataSandiHeader;
