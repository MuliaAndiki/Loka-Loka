'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/hooks/dispatch/dispatch';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import { showNameProps } from '@/app/types/ui';
import { useState } from 'react';
import Slide2Header from '@/app/components/private/user/buat-brand/2-header';
import Slide2Form from '@/app/components/private/user/buat-brand/2-form';
import DesktopBlock from '@/app/components/desktop-block';

const Slide2Children: React.FC = () => {
  const { isMobile } = useIsMobile();
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const formBrand = useAppSelector((state) => state.brand.currentForm);
  const router = useRouter();
  const [showName, setShowName] = useState<showNameProps>({
    ktp: null,
    izinUsaha: null,
    logo: null,
    proposalBrand: null,
  });

  const handleChangeKtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setShowName((prev) => ({
      ...prev,
      ktp: e.target.value,
    }));
    dispatch(
      setFormBrand({
        path: 'document.ktp',
        value: file,
      })
    );
  };

  const handleChangeIzinUsaha = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setShowName((prev) => ({
      ...prev,
      izinUsaha: e.target.value,
    }));
    dispatch(
      setFormBrand({
        path: 'document.izinUsaha',
        value: file,
      })
    );
  };

  const handleChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setShowName((prev) => ({
      ...prev,
      logo: e.target.value,
    }));
    dispatch(
      setFormBrand({
        path: 'document.logo',
        value: file,
      })
    );
  };

  const handleChangeProposalBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setShowName((prev) => ({
      ...prev,
      proposalBrand: e.target.value,
    }));
    dispatch(
      setFormBrand({
        path: 'document.proposalBrand',
        value: file,
      })
    );
  };

  const handleNext = () => {
    if (
      !formBrand.document?.izinUsaha ||
      !formBrand.document.ktp ||
      !formBrand.document.proposalBrand
    ) {
      alert.toast({
        title: 'Perhatian',
        message: 'Mohon Lengkapi Seluruh Colum',
        icon: 'warning',
      });
      return;
    }
    router.push('/user/buat-brand/3');
  };

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Slide2Header />
          <Slide2Form
            dispatch={dispatch}
            formBrand={formBrand}
            handleChangeIzinUsaha={(e) => handleChangeIzinUsaha(e)}
            handleChangeProposalBrand={(e) => handleChangeProposalBrand(e)}
            setFormBrand={setFormBrand}
            handleChangeKtp={(e) => handleChangeKtp(e)}
            handleChangeLogo={(e) => handleChangeLogo(e)}
            handleNext={() => handleNext()}
            showName={showName}
          />
        </BrandLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default Slide2Children;
