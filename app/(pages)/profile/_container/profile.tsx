"use client";

import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import ProfileLayout from "@/app/core/layouts/profile-layout";
import Image from "next/image";
import { RouteConfigStatic } from "@/app/config/route.config";
import HistoryApp from "@/app/core/components/history-app";
import Link from "next/link";
import { RouteProfileApp } from "@/app/config/route.config";
import Fallback from "@/app/ui/fallback";
import { Skeleton } from "@/app/ui/skeleton";
import { useGetProfileById } from "@/app/hooks/mutation/auth/useGetProfile";
import { useAlert } from "@/app/hooks/alert/costum-alert";
const ProfileChildren: React.FC = () => {
  const alert = useAlert();
  const { isMobile } = useIsMobile();
  const routes = RouteProfileApp();
  const { data, isPending, isError } = useGetProfileById();

  if (isError) {
    return (
      <Text className="text-lg md:text-4xl">
        Mohon Maap Terjadi Kesalahan Saat Memuat Data
      </Text>
    );
  }

  if (isPending) {
    return <Skeleton className=" w-full h-screen" />;
  }
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="w-full h-full relative">
            <Container className="flex justify-around items-center">
              <Container className="flex justify-center items-center gap-4">
                <Image
                  alt="Profile"
                  src="/asset/Profile.svg"
                  width={80}
                  height={80}
                  className="rounded-full object-contain border"
                />
                <Container className="flex justify-center items-start flex-col">
                  <Text className="text-lg md:text-4xl">
                    {data.data.fullname}
                  </Text>
                  <Text>{data.data.lokasi}</Text>
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
              {routes.map((items, key) => (
                <Container key={key} className="w-full">
                  {items.href ? (
                    <Link
                      key={key}
                      href={items.href}
                      className="w-full flex justify-between items-center my-2 border-b-2 border-[var(--shapeV1-child)] p-2"
                    >
                      <Container className="flex  gap-2 items-center justify-center">
                        <items.iconV1 />
                        <Text className="md:text-4xl text-lg font-semibold ">
                          {items.title}
                        </Text>
                      </Container>

                      <items.iconV2 />
                    </Link>
                  ) : (
                    <Container className="w-full flex justify-between items-center  border-b-2 border-[var(--shapeV1-child)] p-2 text-red-500">
                      <items.iconV1 />
                      <button
                        onClick={() =>
                          alert.modal({
                            title: "Keluar",
                            deskripsi: "Apakah Anda Yakin Ingin Keluar",
                            icon: "question",
                            onConfirm: () => {
                              items.onClick?.();
                            },
                          })
                        }
                        className="flex items-center gap-2 p-2 w-full text-left cursor-pointer "
                        disabled={items.isPending}
                      >
                        <Text className=" text-red-500 md:text-4xl text-lg font-semibold ">
                          {items.isPending ? (
                            <Fallback
                              title="Tunggu Sebentar"
                              className="text-red-500"
                            />
                          ) : (
                            items.title
                          )}
                        </Text>
                      </button>
                    </Container>
                  )}
                </Container>
              ))}
            </Container>
          </Container>
        </ProfileLayout>
      )}
    </Container>
  );
};

export default ProfileChildren;
