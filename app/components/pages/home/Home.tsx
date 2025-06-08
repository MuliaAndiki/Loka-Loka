"use client";
import { useIsMobile } from "../../hooks/Mobile";
import Link from "next/link";
import { RouteConfigStatic } from "../../config/route.config";
import Container from "../../ui/container";
import Image from "next/image";
import Icon from "@/public/asset/icon fix.svg";

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full flex-col">
            {RouteConfigStatic.map((items, key) => (
              <Container as="main" key={key} className=" ">
                <Link href={items.login.href}>
                  <Image src={Icon} alt="icon" />
                </Link>
              </Container>
            ))}
          </Container>
        </Container>
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

export default HomeChildren;
