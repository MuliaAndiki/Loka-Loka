"use client";

import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import ProfileLayout from "@/app/core/layouts/profile-layout";
const EditProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [formEditProfile, setFormEditProfile] = useState<formEditProfileSchema>(
    {
      email: "",
      fullname: "",
      nomorhp: "",
      gender: null,
    }
  );

  const handleChageGender = (e: string) => {
    const booleanValue = e === "true" ? true : e === "false" ? false : null;
    setFormEditProfile((prev) => ({
      ...prev,
      gender: booleanValue,
    }));
  };

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="w-full h-full">
            </Container>
          </Container>
        </ProfileLayout>
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

export default EditProfileChildren;
