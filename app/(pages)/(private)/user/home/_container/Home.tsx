"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import HomeLayout from "@/app/core/layouts/home-layout";
import { Text } from "@/app/ui/Text";
import CardProfile from "@/app/core/components/card-profile";
import FilterHome from "@/app/core/components/filter-home";
import { Input } from "@/app/ui/input";
import PromotionApp from "@/app/core/components/promotion-app";
import { PromotionSchemaData } from "@/app/config/component.config";
import { Swiper, SwiperSlide } from "swiper/react";
import KategoriHome from "@/app/core/components/kategori-home";
import { RouteConfigStatic } from "@/app/config/route.config";
import RekomendasiHome from "@/app/core/components/rekomendasi-home";
import { RekomendasiSchemaData } from "@/app/config/component.config";
import Link from "next/link";
import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks/dispatch/dispatch";
import { KategoriSchemaData } from "@/app/config/component.config";
const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  // Debug Data
  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log(`Debug Awal Untuk Data User ${currentUser?.user.phoneNumber}`);
  }, []);
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <HomeLayout>
          <Container as="main" className="w-full h-full ">
            <Container className="flex justify-center items-center flex-col">
              <Container className="flex w-full ">
                <CardProfile />
              </Container>
              <Container className="flex items-center gap-2 w-full px-4 mt-2">
                <Input placeholder="Pencarian" />
                <FilterHome />
              </Container>

              <Container className="flex  w-full mt-4 items-start justify-center p-4 ">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  grabCursor
                  breakpoints={{
                    768: {
                      slidesPerView: 2.5,
                    },
                  }}
                >
                  {PromotionSchemaData.map((item, key) => (
                    <SwiperSlide key={key}>
                      <PromotionApp data={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>

              <Container className=" flex-col flex w-full">
                <Container className="flex justify-end items-center p-2">
                  <Text className="text-sm md:text-4xl font-extralight">
                    Lihat Selengkapnya Kategori
                  </Text>
                </Container>
                <Container className="w-full flex  p-4 gap-4">
                  <Swiper
                    spaceBetween={16}
                    slidesPerView={3}
                    grabCursor
                    breakpoints={{
                      768: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {KategoriSchemaData.map((item, key) => (
                      <SwiperSlide key={key}>
                        <KategoriHome data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Container>
              </Container>

              <Container className="w-full flex justify-between p-2 items-center">
                <Text className="text-lg md:text-4xl font-bold ">
                  Rekomendasi
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.lihatSemuaRekomendasi.href}>
                    <Text className="font-extralight text-sm">
                      {items.lihatSemuaRekomendasi.title}
                    </Text>
                  </Link>
                ))}
              </Container>
              <Container className="w-full h-full p-2">
                <Container className="grid grid-cols-2 grid-rows-1 gap-4 ">
                  {RekomendasiSchemaData.slice(0, 4).map((items, key) => (
                    <Container
                      key={key}
                      className="flex justify-center items-center"
                    >
                      <RekomendasiHome data={items} />
                    </Container>
                  ))}
                </Container>
              </Container>
              <Container className="w-full p-2 ">
                <Container className="flex justify-between items-center">
                  <Text className="md:text-4xl text-lg font-bold">
                    Terdekat
                  </Text>
                  {RouteConfigStatic.map((items, key) => (
                    <Link key={key} href={items.lihatSemuaTerdekat.href}>
                      <Text className="font-extralight text-sm">
                        {items.lihatSemuaTerdekat.title}
                      </Text>
                    </Link>
                  ))}
                </Container>
              </Container>
            </Container>
          </Container>
        </HomeLayout>
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

export default HomeChildren;
