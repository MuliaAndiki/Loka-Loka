'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';

const HomeChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container as="section">
          <Text>Set Up Page Organize </Text>
        </Container>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default HomeChildren;
