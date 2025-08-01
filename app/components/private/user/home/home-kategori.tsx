import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { Swiper, SwiperSlide } from 'swiper/react';
import KategoriHome from '@/app/core/components/kategori-home';
import { KategoriSchemaData } from '@/app/config/component.config';
const HomeKategori = () => {
  return (
    <Container as="section" className=" flex-col flex w-full">
      <Container className="flex justify-end items-center p-2">
        <Text className="text-sm md:text-4xl font-extralight">Lihat Selengkapnya Kategori</Text>
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
  );
};

export default HomeKategori;
