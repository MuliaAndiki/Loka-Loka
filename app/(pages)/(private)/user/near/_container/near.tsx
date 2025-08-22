'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ChildUserLayout from '@/app/core/layouts/child.user-layout';
import { Text } from '@/app/ui/Text';
import DesktopBlock from '@/app/components/desktop-block';
import View from '@/app/ui/view';

const NearChild = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile ? (
        <ChildUserLayout>
          <View className="flex justify-center items-center">
            <Text>Setup Component Terdekat</Text>
          </View>
        </ChildUserLayout>
      ) : (
        <DesktopBlock />
      )}
    </Container>
  );
};

export default NearChild;
