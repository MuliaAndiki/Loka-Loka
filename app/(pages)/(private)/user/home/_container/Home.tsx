'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import HomeLayout from '@/app/core/layouts/home-layout';
import HomeHeader from '@/app/components/private/user/home/home-header';
import DesktopBlock from '@/app/components/desktop-block';
import HomePromotion from '@/app/components/private/user/home/home-promotion';
import HomeKategori from '@/app/components/private/user/home/home-kategori';
import HomeRekomendasi from '@/app/components/private/user/home/home-rekomendasi';
import HomeTerdekat from '@/app/components/private/user/home/home-terdekat';
import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';
// import { useEffect } from 'react';
// import { useAppSelector } from '@/app/hooks/dispatch/dispatch';

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const Profile = useGetProfileById();

  // Debug Data
  // const { currentUser } = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   console.log(`Debug Awal Untuk Data User ${currentUser?.user.provinsi}`);
  // }, []);
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <HomeLayout>
          <HomeHeader
            isMobile={isMobile}
            data={Profile.data}
            isError={Profile.isError}
            isPending={Profile.isPending}
          />
          <HomePromotion />
          <HomeKategori />
          <HomeRekomendasi />
          <HomeTerdekat />
        </HomeLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default HomeChildren;
