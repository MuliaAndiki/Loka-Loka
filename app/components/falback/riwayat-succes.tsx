import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { FileMinus } from 'lucide-react';
export default function RiwayatSucces() {
  return (
    <Container className="flex justify-center items-center h-full flex-col">
      <FileMinus size={150} />
      <Text className="font-bold text-2xl text-center">
        Anda tidak memiliki pesanan berhasil pada saat ini.
      </Text>
    </Container>
  );
}
