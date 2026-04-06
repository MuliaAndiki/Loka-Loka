import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { IconCards } from '@tabler/icons-react';

export default function FallbackCreaditCard() {
  return (
    <Container className="w-full flex justify-center items-center py-8 flex-col  rounded-lg p-2  my-2">
      <IconCards size={100} />
      <Text className=" text-sm">Belum ada credit card yang ditambahkan</Text>
    </Container>
  );
}
