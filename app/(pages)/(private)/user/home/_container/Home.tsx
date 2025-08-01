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

const HomeChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  // Debug Data
  // const { currentUser } = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   console.log(`Debug Awal Untuk Data User ${currentUser?.user.phoneNumber}`);
  // }, []);
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <HomeLayout>
          <Container as="main" className="w-full h-full ">
            <HomeHeader isMobile={isMobile} />
            <HomePromotion />
            <HomeKategori />
            <HomeRekomendasi />
            <HomeTerdekat />
          </Container>
        </HomeLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default HomeChildren;
