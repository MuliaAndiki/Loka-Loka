import Container from '@/app/ui/container';
import { Text } from 'lucide-react';

export default function FallbackMetodePembayaran() {
  return (
    <Container as="section" className="flex justify-center items-center flex-col">
      <Text>Fallback Pembayaran</Text>
    </Container>
  );
}
