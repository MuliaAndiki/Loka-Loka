'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import DesktopBlock from '@/app/components/desktop-block';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@/app/ui/button';
const MetodePembayaranChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center p-2 flex-col ">
            <Container className="w-full justify-between items-centerjustify-between items-center flex">
              <Text className="text-2xl font-bold ">Kartu Kredit</Text>
              <Button variant="outline">
                <IconPlus />
              </Button>
            </Container>
            {/* Kartu Kreadit */}
            <Container className="w-full h-auto border p-2">Card</Container>
          </Container>
        </ProfileLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default MetodePembayaranChildren;
