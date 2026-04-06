import Container from '../ui/container';
import { Text } from '../ui/Text';
import { MonitorX } from 'lucide-react';

const DesktopBlock = () => {
  return (
    <Container
      as="main"
      className="w-screen h-screen flex justify-center items-center gradient-secondary dark:gradient-secondary"
    >
      <Container className="card-glass shadow-enhanced rounded-2xl p-8 flex flex-col items-center gap-4 animate-enter ">
        <MonitorX className="w-16 h-16 text-primary animate-pulse" />
        <Text className="text-2xl font-bold text-gradient-primary text-center">
          Website Ini Tidak Tersedia di Desktop
        </Text>
        <Text className="text-sm text-muted-foreground text-center">
          Silakan buka website ini melalui perangkat <b>mobile</b> untuk pengalaman terbaik 🚀
        </Text>
      </Container>
    </Container>
  );
};

export default DesktopBlock;
