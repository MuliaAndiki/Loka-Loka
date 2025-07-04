"use client";
import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile.config";
import NavLayout from "@/app/core/layouts/nav.layout";
import { Text } from "@/app/ui/Text";
import Icon from "@/public/asset/hpl.png";
import Image from "next/image";
import { Button } from "@/app/ui/button";
import { Input } from "@/app/ui/input";

const MetodeLainChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <Container className="w-full h-full">
            <Container className="flex justify-center items-center flex-col">
              <Text className="text-lg md:text-4xl font-bold">Metode Lain</Text>
              <Image
                alt="icon"
                src={Icon}
                width={200}
                height={200}
                className="object-cover h-auto "
              />
              <Text className="text-sm md:text-2xl">
                Mohon Masukkan Kontak Anda Untuk Melakukan Pemulihan
              </Text>
              <Container className="w-full max-w-[70%]">
                <Container className="my-2">
                  <Input />
                </Container>
                <Container className="my-2">
                  <Button className="w-full">Verifikasi</Button>
                </Container>
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

export default MetodeLainChildren;
