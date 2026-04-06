'use client';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import ChildUserLayout from '@/app/core/layouts/child.user-layout';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';

const RekomendasiChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile ? (
        <ChildUserLayout>
          <Container className="flex justify-center items-center">
            <Text>Setup Component Rekomendasi </Text>
          </Container>
        </ChildUserLayout>
      ) : (
        <DesktopBlock />
      )}
    </Container>
  );
};

export default RekomendasiChildren;
