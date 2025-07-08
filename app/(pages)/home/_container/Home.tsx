"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import HomeLayout from "@/app/core/layouts/home.layout";
import { Text } from "@/app/ui/Text";
import CardProfile from "@/app/core/components/card-profile";
import FilterHome from "@/app/core/components/filter-home";
import { Input } from "@/app/ui/input";
import PromotionApp from "@/app/core/components/promotion-app";
import { PromotionSchemaData } from "@/app/config/component.config";
import { Swiper, SwiperSlide } from "swiper/react";
import KategoriHome from "@/app/core/components/kategori-home";
import { RouteStaticConfig } from "@/app/types/config";
import { RouteConfigStatic } from "@/app/config/route.config";
import Link from "next/link";

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
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
              <Container className="w-full flex mt-2 p-4 border">
                <KategoriHome />
              </Container>

              <Container className="w-full flex justify-between p-2 items-center">
                <Text className="text-lg md:text-4xl font-bold ">
                  Rekomendasi
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.lihatSemua.href}>
                    <Text className="font-extralight text-sm">
                      {items.lihatSemua.title}
                    </Text>
                  </Link>
                ))}
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
