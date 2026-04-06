'use client';

import DesktopBlock from '@/app/components/desktop-block';
import Kategori from '@/app/core/components/kategori-home';
import ChildUserLayout from '@/app/core/layouts/child.user-layout';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  BrandHomeData,
  KategoriSchemaData,
  SpesialOfficerData,
} from '@/app/config/component.config';
import Searching from '@/app/ui/searching';
import { useState } from 'react';
import { Text } from '@/app/ui/Text';
import Tiket from '@/app/core/components/tiket';
import { TiketSchemaData } from '@/app/config/component.config';
import SpesialOfficer from '@/app/core/components/spesial-officer';
import Brands from '@/app/core/components/brand-home';

const KategoriChildren = () => {
  const { isMobile } = useIsMobile();
  const [fakeData, setFakeData] = useState<any>({
    fakedata: '',
  });

  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <ChildUserLayout>
          <Container className="flex justify-center items-center flex-col ">
            <Container className="w-full flex p-4 gap-4">
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
                    <Kategori data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
            <Searching
              onChange={(e) =>
                setFakeData((prev: any) => {
                  const obj = { ...prev, fakedata: e.target.value };
                  return obj;
                })
              }
              value={fakeData}
            />

            <Container className="flex justify-between items-center w-full p-4">
              <Text className="text-lg font-extrabold">Brands :</Text>
            </Container>

            <Container className=" w-full p-2">
              {BrandHomeData.map((items, key) => (
                <Brands key={key} data={items} />
              ))}
            </Container>

            <Container className="flex justify-between items-center w-full p-2">
              <Text className="text-lg font-extrabold">Popular :</Text>
            </Container>
            <Container className="w-full p-2">
              <Container className="grid grid-cols-2 grid-rows-1 gap-4 ">
                {TiketSchemaData.slice(0, 2).map((items, key) => (
                  <Container key={key} className="flex justify-center items-center">
                    <Tiket data={items} />
                  </Container>
                ))}
              </Container>
            </Container>
            <Container className="flex justify-between items-center w-full p-2">
              <Text className="text-lg font-extrabold">Spesial Officer :</Text>
            </Container>
            <Container className="mb-10 w-full">
              {SpesialOfficerData.map((items, key) => (
                <SpesialOfficer key={key} data={items} />
              ))}
            </Container>
          </Container>
        </ChildUserLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default KategoriChildren;
