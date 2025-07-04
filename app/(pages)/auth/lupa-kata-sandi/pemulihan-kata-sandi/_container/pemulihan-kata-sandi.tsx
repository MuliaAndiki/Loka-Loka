"use client";
import NavLayout from "@/app/core/layouts/nav.layout";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile.config";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import RecoveryIcon from "@/public/asset/recovery.png";
import Image from "next/image";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
const PemulihanKataSandiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <Container className="w-full h-full">
            <Container className="flex justify-center items-center flex-col">
              <Text>Page Pemulihan Kata Sandi</Text>
              <Image
                alt="Icon"
                src={RecoveryIcon}
                width={isMobile ? 200 : 300}
                height={isMobile ? 200 : 300}
                className="h-auto object-cover"
              />
              <Container className="w-full max-w-[70%] mx-auto">
                <Input className="my-2" placeholder="Kata Sandi Baru" />
                <Input
                  className="my-2"
                  placeholder="Confirmasi Kata Sandi Baru"
                />

                <Button className="w-full my-2">Ubah Kata Sandi</Button>

                <Text className="text-sm md:text-4xl italic">
                  <Text className="text-red-500">Note:</Text> Mohon Ingat
                  Kembali Kata Sandi Ketika Sudah Diubah !
                </Text>
              </Container>
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
