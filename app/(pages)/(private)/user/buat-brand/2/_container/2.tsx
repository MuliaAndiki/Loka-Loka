'use client';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/app/hooks/dispatch/dispatch';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { IconBrandItch } from '@tabler/icons-react';
import { Input } from '@/app/ui/input';
import { Label } from '@/app/ui/label';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import UploadsTrigger from '@/app/utils/UploadTriger';
import { Button } from '@/app/ui/button';
import { showNameProps } from '@/app/types/ui';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    console.log('Debug File', formBrand.document);
  }, []);

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Container className="flex justify-center items-center flex-col">
            <IconBrandItch stroke={1.3} width={100} height={100} />
            <Text>Dokument</Text>
            <Container className="w-full max-w-4/5 mx-auto my-4 flex flex-col">
              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">NIK :</Label>
                <Input
                  className="w-full"
                  type="number"
                  value={formBrand.document?.other ?? ''}
                  onChange={(e) => {
                    const newValue = [e.target.value];
                    dispatch(
                      setFormBrand({
                        path: 'document.other',
                        value: newValue,
                      })
                    );
                  }}
                />
              </Container>

              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Ktp :</Label>
                <UploadsTrigger
                  multiple={false}
                  onChange={(e) => handleChangeKtp(e)}
                  accept="image/*"
                >
                  <Button className="w-full">{showName.ktp ? showName.ktp : 'Uploads Ktp'}</Button>
                  <Text className="justify-end flex italic font-semibold text-sm">
                    Format: .jpg .webp .png
                  </Text>
                </UploadsTrigger>
              </Container>
              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Izin Usaha :</Label>
                <UploadsTrigger
                  multiple={false}
                  accept="image/*"
                  onChange={(e) => handleChangeIzinUsaha(e)}
                >
                  <Button className="w-full">
                    {showName.izinUsaha ? showName.izinUsaha : 'Uploads Izin Usaha'}
                  </Button>
                </UploadsTrigger>
                <Text className="flex justify-end text-sm font-semibold italic">
                  Format: .pdf .doc
                </Text>
              </Container>

              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Logo :</Label>
                <UploadsTrigger
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => handleChangeLogo(e)}
                >
                  <Button className="w-full">
                    {showName.logo ? showName.logo : 'Uploads Logo'}
                  </Button>
                  <Text className="flex justify-end text-sm font-semibold italic">
                    Format: .jpg .webp .png
                  </Text>
                </UploadsTrigger>
              </Container>

              <Container className="w-full mb-6">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Proposal Brand :</Label>
                <UploadsTrigger
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => handleChangeProposalBrand(e)}
                >
                  <Button className="w-full">
                    {showName.proposalBrand ? showName.proposalBrand : 'Uploads Proposal Brands'}
                  </Button>
                </UploadsTrigger>
                <Text className="flex justify-end text-sm font-semibold italic">
                  Format: .pdf .doc
                </Text>
              </Container>
              <Button className="w-full" onClick={() => handleNext()}>
                Selanjutnya
              </Button>
            </Container>
          </Container>
        </BrandLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <Text>Website Ini Tidak Tersedia Di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Slide2Children;
