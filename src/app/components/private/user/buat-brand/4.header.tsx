import Container from '@/app/ui/container';
import { IconBrandItch } from '@tabler/icons-react';

const Slide4Header = () => {
  return (
    <Container as="header" className="flex justify-center items-center flex-col">
      <IconBrandItch stroke={1.3} width={100} height={100} />
    </Container>
  );
};

export default Slide4Header;
