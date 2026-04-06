'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';
import { useParams } from 'next/navigation';
import BrandLayout from '@/app/core/layouts/brand-layout';

const BrandChildren = () => {
  const { isMobile } = useIsMobile();
  const slug = useParams();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Container className="flex justify-center items-center">
            <Text>Set up Dynamic Root Page for page</Text>
          </Container>
        </BrandLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default BrandChildren;
