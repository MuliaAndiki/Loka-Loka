import Container from '@/app/ui/container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PromotionSchemaData } from '@/app/config/component.config';
import PromotionApp from '@/app/core/components/promotion-app';

const HomePromotion = () => {
  return (
    <Container as="section" className="flex  w-full mt-4 items-start justify-center p-4 ">
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
  );
};

export default HomePromotion;
