import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { FileClock } from 'lucide-react';

export default function RiwayatActive() {
  return (
    <Container className="flex justify-center items-center h-full flex-col">
      <FileClock size={150} />
      <Text className="font-bold text-2xl text-center">
        Anda tidak memiliki pesanan aktif pada saat ini.
      </Text>
    </Container>
  );
}
