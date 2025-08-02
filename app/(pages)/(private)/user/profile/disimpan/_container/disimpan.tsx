'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';
import ProfileLayout from '@/app/core/layouts/profile-layout';

const DisimpanChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center flex-col">
            <Text>Set Up Page</Text>
          </Container>
        </ProfileLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default DisimpanChildren;
