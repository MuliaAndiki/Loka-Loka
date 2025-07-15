"use client";

import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import ProfileLayout from "@/app/core/layouts/profile-layout";
const TentangKamiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center">
            <Text>Ini Page Tetang Kami</Text>
          </Container>
        </ProfileLayout>
      )}
    </Container>
  );
};

export default TentangKamiChildren;
