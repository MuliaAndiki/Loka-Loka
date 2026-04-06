import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { IconBrandItch } from '@tabler/icons-react';

const Slide2Header = () => {
  return (
    <Container as="main" className="flex justify-center items-center flex-col">
      <IconBrandItch stroke={1.3} width={100} height={100} />
      <Text>Dokument</Text>
    </Container>
  );
};

export default Slide2Header;
