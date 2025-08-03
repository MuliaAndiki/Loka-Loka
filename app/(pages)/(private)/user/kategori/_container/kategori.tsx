'use client';

import DesktopBlock from '@/app/components/desktop-block';
import HomeLayout from '@/app/core/layouts/home-layout';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';

const KategoriChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full">
      {isMobile && (
        <HomeLayout>
          <Container className="flex justify-center items-center flex-col">
            <Text>SetUp Page</Text>
          </Container>
        </HomeLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default KategoriChildren;
