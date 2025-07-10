"use client";
import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import NavLayout from "@/app/core/layouts/auth-layout";
import ForrgotPassword from "@/public/asset/Lupa.png";
import Image from "next/image";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { RouteConfigStatic } from "@/app/config/route.config";
import Link from "next/link";

const LupaKataSandiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full min-h-screen" as="main">
      {isMobile && (
        <NavLayout>
          <Container className="w-full h-full relative">
            <Container className="w-full justify-center items-center flex flex-col">
              <Text className="font-bold text-lg md:text-2xl">
                Lupa Kata Sandi?
              </Text>
              <Text className="text-sm md:text-2xl">
                Mohon Masukan Email Kamu Untuk Melakukan Pemulihan
              </Text>
              <Image
                className="object-cover h-auto"
                src={ForrgotPassword}
                alt="Icon"
                width={isMobile ? 300 : 400}
                height={isMobile ? 300 : 400}
              />
            </Container>
          </Container>
          <Container className="w-full max-w-[70%] mx-auto">
            <Container className="my-2">
              <Input placeholder="Email" />
            </Container>
            <Button className="w-full">Verifikasi</Button>
            <Container className="w-full text-center my-1">
              {RouteConfigStatic.map((items, key) => (
                <Link key={key} href={items.metodeLain.href}>
                  <Text className="text-sm md:text-2xl">
                    {items.metodeLain.title}
                  </Text>
                </Link>
              ))}
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

export default LupaKataSandiChildren;
