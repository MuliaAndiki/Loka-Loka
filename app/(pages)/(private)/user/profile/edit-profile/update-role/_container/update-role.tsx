"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import ProfileLayout from "@/app/core/layouts/profile-layout";
import { Input } from "@/app/ui/input";
import { Text } from "@/app/ui/Text";
import { formUpdateRoleSchema } from "@/app/types/form";
import { useState } from "react";
import { useUpdateRole } from "@/app/hooks/mutation/auth/useUpdateRole";
import { useAlert } from "@/app/hooks/alert/costum-alert";

const UpdateRoleChildren: React.FC = () => {
  const [formUpdateRole, setFormUpdateRole] = useState<formUpdateRoleSchema>({
    userId: "",
    brand: "",
    document: {},
  });
  const alert = useAlert();

  const { mutate: update, isPending } = useUpdateRole();

  const handleUpdateRole = () => {
    if (
      !formUpdateRole.brand ||
      !formUpdateRole.document ||
      !formUpdateRole.userId
    ) {
      alert.toast({
        title: "Perhatian !",
        message: "Mohon Isi Semua Colum",
        icon: "warning",
      });
      return;
    }
    return update(formUpdateRole);
  };
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full ">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center">
            <Text className="text-lg md:text-4xl font-bold">
              Upgrade - Role
            </Text>
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

export default UpdateRoleChildren;
