"use client";
import NavLayout from "@/app/core/layouts/nav.layout";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile.config";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
const PemulihanKataSandiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <Container className="w-full h-full">
            <Container className="flex justify-center items-center">
              <Text>Page Pemulihan Kata Sandi</Text>
            </Container>
          </Container>
        </NavLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center">
            <Text>Website Ini Tidak Tersedia di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default PemulihanKataSandiChildren;
