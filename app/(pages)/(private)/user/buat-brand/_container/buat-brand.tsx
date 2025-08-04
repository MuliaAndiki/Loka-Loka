'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { useAppDispatch, useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import { useRouter } from 'next/navigation';
import DesktopBlock from '@/app/components/desktop-block';
import BuatBrandHeader from '@/app/components/private/user/buat-brand/buat-brand-header';
import BuatBrandForm from '@/app/components/private/user/buat-brand/buat-brand-form';

const BuatBrandChildren: React.FC = () => {
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const formBrand = useAppSelector((state) => state.brand.currentForm);
  const router = useRouter();

  const handleNext = () => {
    if (!formBrand.nama || !formBrand.kontak?.email || !formBrand.kontak.phoneNumber) {
      alert.toast({
        title: 'Perhatian!',
        message: 'Mohon Lengkapi Seluruh Colum',
        icon: 'warning',
      });
      return;
    }
    router.push('/user/buat-brand/2');
  };
  const { isMobile } = useIsMobile();

  return (
    <Container className="w-full h-full ">
      {isMobile && (
        <BrandLayout>
          <BuatBrandHeader />
          <BuatBrandForm
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

export default BuatBrandChildren;
