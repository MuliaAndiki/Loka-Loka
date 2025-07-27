'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { Text } from '@/app/ui/Text';
import { Input } from '@/app/ui/input';
import { IconBrandItch } from '@tabler/icons-react';

const Slide3Children = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Container className="flex justify-center items-center flex-col">
            <IconBrandItch stroke={1.3} width={100} height={100} />
          </Container>
        </BrandLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <Text>Website Ini Tidak Tersedia Di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Slide3Children;
