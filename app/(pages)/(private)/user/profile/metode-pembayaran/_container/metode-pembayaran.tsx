'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import DesktopBlock from '@/app/components/desktop-block';
const MetodePembayaranChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center">
            <Text className="text-lg font-bold">Metode Pembayaran</Text>
          </Container>
        </ProfileLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default MetodePembayaranChildren;
