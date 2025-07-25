"use client";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";

const Slide2Children: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <Container className="flex justify-center items-center">
          <Text>Setup Page</Text>
        </Container>
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

export default Slide2Children;
