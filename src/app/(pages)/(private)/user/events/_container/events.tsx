'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';
import EventsLayout from '@/app/core/layouts/event-layout';
const EventsContainer = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile ? (
        <EventsLayout>
          <Container className="flex justify-center items-center">
            <Text>Setup Page for All Events</Text>
          </Container>
        </EventsLayout>
      ) : (
        <DesktopBlock />
      )}
    </Container>
  );
};

export default EventsContainer;
