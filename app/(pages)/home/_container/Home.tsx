"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile.config";
import Container from "@/app/ui/container";
import NavLayout from "@/app/core/layouts/nav.layout";
import { Text } from "@/app/ui/Text";

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <Container as="main" className="w-screen h-screen">
            <Container className="flex justify-center items-center  flex-col">
              <Text>Ini Home</Text>
            </Container>
          </Container>
        </NavLayout>
      )}
      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <h1>Website Ini Tidak Tersedia Di Desktop</h1>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default HomeChildren;
