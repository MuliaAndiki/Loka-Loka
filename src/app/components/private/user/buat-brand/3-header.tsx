import Container from '@/app/ui/container';
import { IconBrandItch } from '@tabler/icons-react';
import { Text } from '@/app/ui/Text';

const Slide3Header = () => {
  return (
    <Container as="header" className="flex justify-center items-center flex-col">
      <IconBrandItch stroke={1.3} width={100} height={100} />
      <Text>Sosial Media</Text>
    </Container>
  );
};

export default Slide3Header;
