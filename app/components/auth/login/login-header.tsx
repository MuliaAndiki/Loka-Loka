import Image from 'next/image';
import { Text } from '@/app/ui/Text';
import Container from '@/app/ui/container';

const LoginHeader = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Container as="main" className="flex flex-col justify-center items-center">
      <Image
        className="object-cover h-auto"
        src="/asset/iconFix.png"
        alt="Icon"
        width={isMobile ? 300 : 400}
        height={isMobile ? 300 : 400}
      />

      <Text className="font-bold">Selamat Datang Di Loka-Loka</Text>
      <Text className="font-light">Masukkan Akun Kamu Untuk Lanjut !</Text>
    </Container>
  );
};

export default LoginHeader;
