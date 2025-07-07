"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import HomeLayout from "@/app/core/layouts/home.layout";
import { Text } from "@/app/ui/Text";
import CardProfile from "@/app/core/components/CardProfile";
import Shape from "@/app/ui/shape";

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <HomeLayout>
          <Container as="main" className="w-full h-full relative">
            <Shape className="absolute w-80 h-80 bg-[var(--shape-parent)] rounded-full z-[-5] left-1/2 -translate-x-1/3 -translate-y-50" />
            <Shape className="absolute w-20 h-20 bg-[var(--shape-child)] rounded-full z-[-5] left-1/2" />
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
