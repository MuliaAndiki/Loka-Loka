'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';
import { useParams } from 'next/navigation';

const BrandChildren = () => {
  const { isMobile } = useIsMobile();
  const slug = useParams();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container className="">
          <Text>Set up Dynamic Root Page for page</Text>
        </Container>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default BrandChildren;
