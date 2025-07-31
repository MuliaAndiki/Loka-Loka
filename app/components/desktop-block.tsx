import Container from '../ui/container';
import { Text } from '../ui/Text';
const DesktopBlock = () => {
  return (
    <Container as="main" className="w-screen h-screen">
      <Container className="flex justify-center items-center">
        <Text>Website Ini Tidak Tersedia di Desktop</Text>
      </Container>
    </Container>
  );
};
export default DesktopBlock;
