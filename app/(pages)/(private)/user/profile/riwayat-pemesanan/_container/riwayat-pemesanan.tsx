'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';

const RiwayatPemesananChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center">
            <Text>Setup Page</Text>
          </Container>
        </ProfileLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default RiwayatPemesananChildren;
