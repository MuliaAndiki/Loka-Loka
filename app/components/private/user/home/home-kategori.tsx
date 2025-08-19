import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { Swiper, SwiperSlide } from 'swiper/react';
import KategoriHome from '@/app/core/components/kategori-home';
import { KategoriSchemaData } from '@/app/config/component.config';
import { RouteConfigStatic } from '@/app/config/route.config';
import Link from 'next/link';
const HomeKategori = () => {
  return (
    <Container as="section" className=" flex-col flex w-full">
      <Container className="flex justify-end items-center p-2">
        {RouteConfigStatic.map((items, key) => (
          <Link href={items.kategori.href} key={key}>
            <Text className="text-sm md:text-4xl font-extralight">{items.kategori.title}</Text>
          </Link>
        ))}
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
          {KategoriSchemaData.slice(0.2).map((item, key) => (
            <SwiperSlide key={key}>
              <KategoriHome data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default HomeKategori;
