import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { FileOutput } from 'lucide-react';

export default function FallbackRiwayatCancel() {
  return (
    <Container className="flex justify-center items-center h-full flex-col">
      <FileOutput size={150} />
      <Text className="font-bold text-2xl text-center">
        Anda tidak memiliki pesanan dibatalkan pada saat ini.
      </Text>
    </Container>
  );
}
