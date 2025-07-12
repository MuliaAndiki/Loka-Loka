"use client";

import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import ProfileLayout from "@/app/core/layouts/profile-layout";
import Image from "next/image";
import ProfileDummy from "@/public/asset/Profile.svg";
import { RouteConfigStatic } from "@/app/config/route.config";
import HistoryApp from "@/app/core/components/history-app";
import Link from "next/link";
import { RouteProfileApp } from "@/app/config/route.config";

const ProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="w-full h-full relative">
            <Container className="flex justify-around items-center">
              <Container className="flex justify-center items-center gap-4">
                <Image
                  alt="Profile"
                  src={ProfileDummy}
                  width={80}
                  height={80}
                  className="rounded-full object-contain border"
                />
                <Container className="flex justify-center items-start flex-col">
                  <Text>Username</Text>
                  <Text>Location</Text>
                </Container>
              </Container>
              <Container className="">
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.editProfile.href}>
                    <items.editProfile.title />
                  </Link>
                ))}
              </Container>
            </Container>
            <Container className="w-full flex justify-center items-center p-4 drop-shadow-lg ">
              <HistoryApp />
            </Container>
            <Container className="px-2 flex w-full h-full justify-center flex-col items-center ">
              {RouteProfileApp.map((items, key) => (
                <Link
                  key={key}
                  href={items.href}
                  className="w-full flex justify-between items-center my-2 border-b-2 border-[var(--shapeV1-child)] p-2"
                >
                  <Container className="flex gap-2 items-center justify-center">
                    <items.iconV1 />
                    <Text className="md:text-4xl text-lg font-semibold ">
                      {items.title}
                    </Text>
                  </Container>

                  <items.iconV2 />
                </Link>
              ))}
            </Container>
          </Container>
        </ProfileLayout>
      )}
    </Container>
  );
};

export default ProfileChildren;
