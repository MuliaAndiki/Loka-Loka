'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import DesktopBlock from '@/app/components/desktop-block';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@/app/ui/button';
import { useState } from 'react';
import Spreed from '@/app/ui/spreed';
import CreaditCard from '@/app/components/creadit-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreditCardData } from '@/app/config/component.config';
import FallbackCreaditCard from '@/app/components/falback/creadit-card';
import { PaymentMethodData } from '@/app/config/component.config';
import PaymentMethod from '@/app/components/wallet';

const MetodePembayaranChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [isState, setIsState] = useState<'E-Wallet' | 'Bank'>('E-Wallet');

  const creaditCard = CreditCardData.length > 0;
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center p-2 flex-col h-full ">
            <Container className="w-full justify-between items-centerjustify-between items-center flex">
              <Text className="text-2xl font-bold ">Kartu Kredit :</Text>
              <Button variant="outline">
                <IconPlus />
              </Button>
            </Container>
            <Container className="w-full">
              {creaditCard ? (
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  grabCursor
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {CreditCardData.map((items, key) => (
                    <SwiperSlide key={key}>
                      <CreaditCard data={items} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <FallbackCreaditCard />
              )}
            </Container>

            <Container className="flex justify-between items-center w-full mt-4">
              <Button
                variant="outline"
                onClick={() => setIsState('E-Wallet')}
                className="font-bold"
              >
                Wallet
              </Button>
              <Button variant="outline" onClick={() => setIsState('Bank')} className="font-bold">
                Bank
              </Button>
            </Container>
            <Spreed orientation="horizontal" className="my-2" />
            {PaymentMethodData.map((items, key) => (
              <PaymentMethod key={key} data={items} />
            ))}
          </Container>
        </ProfileLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default MetodePembayaranChildren;
