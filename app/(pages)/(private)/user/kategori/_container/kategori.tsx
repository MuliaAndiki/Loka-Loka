'use client';

import DesktopBlock from '@/app/components/desktop-block';
import KategoriHome from '@/app/core/components/kategori-home';
import ChildUserLayout from '@/app/core/layouts/child.user-layout';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  KategoriSchemaData,
  ProductPupolarData,
  SpesialOfficerData,
} from '@/app/config/component.config';
import Searching from '@/app/ui/searching';
import { useState } from 'react';
import { Text } from '@/app/ui/Text';
import RekomendasiHome from '@/app/core/components/rekomendasi-home';
import { RekomendasiSchemaData } from '@/app/config/component.config';
import ProductPopular from '@/app/core/components/productPopular';
import SpesialOfficerComponent from '@/app/core/components/spesial-officer';

const KategoriChildren = () => {
  const { isMobile } = useIsMobile();
  const [fakeData, setFakeData] = useState<any>({
    fakedata: '',
  });

  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <ChildUserLayout>
          <Container className="flex justify-center items-center flex-col">
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
                    <KategoriHome data={item} />
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
              <Text className="text-lg font-extrabold">Terbaik :</Text>
            </Container>

            <Container className="w-full p-2">
              <Container className="grid grid-cols-2 grid-rows-1 gap-4 ">
                {RekomendasiSchemaData.slice(0, 2).map((items, key) => (
                  <Container key={key} className="flex justify-center items-center">
                    <RekomendasiHome data={items} />
                  </Container>
                ))}
              </Container>
            </Container>

            <Container className="flex justify-between items-center w-full p-2">
              <Text className="text-lg font-extrabold">Popular :</Text>
            </Container>
            <Container className=" w-full">
              {ProductPupolarData.map((items, key) => (
                <ProductPopular data={items} key={key} />
              ))}
            </Container>
            <Container className="flex justify-between items-center w-full p-2">
              <Text className="text-lg font-extrabold">Spesial Officer :</Text>
            </Container>
            <Container className="mb-10 w-full">
              {SpesialOfficerData.map((items, key) => (
                <SpesialOfficerComponent key={key} data={items} />
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
