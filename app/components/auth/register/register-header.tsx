import Container from '@/app/ui/container';
import Image from 'next/image';
import { Text } from '@/app/ui/Text';

const RegisterHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Container className="w-full flex justify-center items-center flex-col">
      <Image
        alt="icon"
        src="/asset/iconFix.png"
        width={isMobile ? 300 : 400}
        height={isMobile ? 300 : 400}
        className="object-cover h-auto"
      />

      <Text className="font-bold md:text-4xl text-md ">Daftarkan Diri Anda Di Loka-Loka</Text>
    </Container>
  );
};

export default RegisterHeader;
