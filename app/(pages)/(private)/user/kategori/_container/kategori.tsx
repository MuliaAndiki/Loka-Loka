'use client';

import DesktopBlock from '@/app/components/desktop-block';
import KategoriHome from '@/app/core/components/kategori-home';
import HomeLayout from '@/app/core/layouts/home-layout';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { KategoriSchemaData } from '@/app/config/component.config';
const KategoriChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full">
      {isMobile && (
        <HomeLayout>
          <Container className="flex justify-center items-center flex-col">
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
        </HomeLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default KategoriChildren;
