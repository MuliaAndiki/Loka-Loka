'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import ChildUserLayout from '@/app/core/layouts/child.user-layout';
import { Text } from '@/app/ui/Text';

const SpesialOfficerChild = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile ? (
        <ChildUserLayout>
          <Container className="flex justify-center items-center">
            <Text>Setup Component Spesial Officer</Text>
          </Container>
        </ChildUserLayout>
      ) : (
        <DesktopBlock />
      )}
    </Container>
  );
};

export default SpesialOfficerChild;
