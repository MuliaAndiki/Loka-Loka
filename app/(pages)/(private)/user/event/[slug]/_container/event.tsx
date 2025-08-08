'use client';
import DesktopBlock from '@/app/components/desktop-block';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { useParams } from 'next/navigation';

const EventsChildren = () => {
  const { isMobile } = useIsMobile();
  const slug = useParams();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container as="section" className="flex justify-center items-center"></Container>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default EventsChildren;
