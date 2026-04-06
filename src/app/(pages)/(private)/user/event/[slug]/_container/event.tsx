'use client';
import DesktopBlock from '@/app/components/desktop-block';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { useParams } from 'next/navigation';
import EventsLayout from '@/app/core/layouts/event-layout';
import { Text } from '@/app/ui/Text';

const EventsChildren = () => {
  const { isMobile } = useIsMobile();
  const slug = useParams();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <EventsLayout>
          <Container as="section" className="flex justify-center items-center">
            <Text>Set Up Page For Dynamic Route Event</Text>
          </Container>
        </EventsLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default EventsChildren;
