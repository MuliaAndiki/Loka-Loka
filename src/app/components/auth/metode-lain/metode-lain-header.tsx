import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { IconLockOpenOff } from '@tabler/icons-react';
const MetodeLainHeader = () => {
  return (
    <Container as="main" className="flex justify-center items-center flex-col">
      <Text className="text-lg md:text-4xl font-bold">Metode Lain</Text>
      <IconLockOpenOff width={150} height={150} className="my-2" />
      <Text className="text-sm md:text-2xl w-full font-semibold max-w-[70%] text-center">
        Mohon Masukkan Nomor Hp Anda Untuk Melakukan Pemulihan
      </Text>
    </Container>
  );
};

export default MetodeLainHeader;
