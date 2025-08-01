'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { useAppDispatch, useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
// import { useRouter } from 'next/navigation';
import { useCreateBrand } from '@/app/hooks/mutation/brands/useCreateBrand';
import { useEffect } from 'react';
import { flattenToFormData } from '@/app/utils/formdata';
import { formBikinBrandType } from '@/app/types/form';
import Slide4Header from '@/app/components/private/user/buat-brand/4.header';
import Slide4Form from '@/app/components/private/user/buat-brand/4.form';
import DesktopBlock from '@/app/components/desktop-block';

const Slide4Children: React.FC = () => {
  const { isMobile } = useIsMobile();
  const dispatch = useAppDispatch();
  const formBrand = useAppSelector((state) => state.brand.currentForm);
  const currentId = useAppSelector((state) => state.auth.currentUser?.user._id);
  const Create = useCreateBrand();
  const alert = useAlert();

  useEffect(() => {
    if (currentId) {
      dispatch(setFormBrand({ path: 'userId', value: currentId }));
    }
  }, [currentId]);

  const handleCreateBrand = () => {
    const parsed = formBikinBrandType.safeParse(formBrand);

    if (parsed.error) {
      alert.toast({
        title: 'Validasi Gagal',
        message: 'Cek kembali data yang belum lengkap!',
        icon: 'warning',
      });
      console.log(parsed.error.format());

      return;
    }

    const formData = flattenToFormData(parsed.data);
    console.log('Data akan dikirim:', formBrand);
    Create.mutate(formData);
  };
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Slide4Header />
          <Slide4Form
            dispatch={dispatch}
            formBrand={formBrand}
            handleCreateBrand={() => handleCreateBrand()}
            isPending={Create.isPending}
            setFormBrand={setFormBrand}
          />
        </BrandLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default Slide4Children;
