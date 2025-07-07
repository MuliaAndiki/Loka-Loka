"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import HomeLayout from "@/app/core/layouts/home.layout";
import { Text } from "@/app/ui/Text";
import CardProfile from "@/app/core/components/CardProfile";

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <HomeLayout>
          <Container as="main" className="w-full h-full ">
            <Container className="flex justify-center items-center flex-col">
              <Container className="flex justify-start items-start w-full px-2">
                <CardProfile />
              </Container>
            </Container>
          </Container>
        </HomeLayout>
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

export default HomeChildren;
