'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/hooks/dispatch/dispatch';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import Slide3Header from '@/app/components/private/user/buat-brand/3-header';
import Slide3Form from '@/app/components/private/user/buat-brand/3-form';
import DesktopBlock from '@/app/components/desktop-block';

const Slide3Children = () => {
  const { isMobile } = useIsMobile();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formBrand = useAppSelector((state) => state.brand.currentForm);

  const handleNext = () => {
    router.push('/user/buat-brand/4');
  };

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Slide3Header />
          <Slide3Form
            dispatch={dispatch}
            formBrand={formBrand}
            handleNext={() => handleNext()}
            setFormBrand={setFormBrand}
          />
        </BrandLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default Slide3Children;
