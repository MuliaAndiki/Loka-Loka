import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { IconUserScan } from '@tabler/icons-react';

const VerifyOtpHeader = ({}) => {
  return (
    <Container as="main" className="flex justify-center items-center flex-col">
      <Text className="text-lg md:text-4xl font-extrabold">Masukan Kode OTP Kamu</Text>
      <IconUserScan width={150} height={150} className="my-2" />
    </Container>
  );
};

export default VerifyOtpHeader;
