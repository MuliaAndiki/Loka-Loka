"use client";
import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import NavLayout from "@/app/core/layouts/nav.layout";
import { RouteConfigStatic } from "@/app/config/route.config";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/asset/iconFix.png";
const SplashScreenChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <Container as="main" className="w-screen h-screen">
            <Container className="flex justify-center items-center h-full flex-col">
              {RouteConfigStatic.map((items, key) => (
                <Container as="main" key={key} className="">
                  <Link href={items.login.href}>
                    <Image src={Icon} alt="icon" />
                  </Link>
                </Container>
              ))}
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

export default SplashScreenChildren;
