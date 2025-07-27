'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { Input } from '@/app/ui/input';
import { Text } from '@/app/ui/Text';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { Label } from '@/app/ui/label';
import { useAppDispatch, useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { IconBrandItch } from '@tabler/icons-react';
import { updateForm } from '@/app/stores/BrandSlice/brandSlice';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/ui/button';

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
          <Container className="flex justify-center items-center flex-col">
            <IconBrandItch stroke={1.3} width={100} height={100} />
            <Container className=" w-full max-w-4/5 mx-auto my-4 p-2 flex flex-col">
              <Container className="w-full my-2">
                <Label className="text-lg md:text-4xl mb-2 font-semibold">Nama Brand :</Label>
                <Input
                  placeholder="Masukan Nama Brand"
                  value={formBrand.nama ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    console.log('input', value);
                    dispatch(updateForm({ path: 'nama', value: e.target.value }));
                  }}
                />
              </Container>
              <Container className="w-full my-2">
                <Label className="text-lg md:text-4xl mb-2 font-semibold">Email :</Label>
                <Input
                  placeholder="Masukan Email Brand"
                  value={formBrand.kontak?.email ?? ''}
                  type="email"
                  onChange={(e) => {
                    dispatch(
                      updateForm({
                        path: 'kontak.email',
                        value: e.target.value,
                      })
                    );
                  }}
                />
              </Container>
              <Container className="w-full my-2">
                <Label className="text-lg md:text-4xl mb-2 font-semibold">Nomor HandPhone :</Label>
                <Input
                  placeholder="Nomor HandPhone"
                  type="number"
                  value={formBrand.kontak?.phoneNumber ?? ''}
                  onChange={(e) => {
                    dispatch(
                      updateForm({
                        path: 'kontak.phone',
                        value: e.target.value,
                      })
                    );
                  }}
                />
              </Container>
              <Container className="w-full my-2">
                <Label className="text-lg md:text-2xl mb-2 font-semibold">Website :</Label>
                <Input
                  placeholder="Website Optional"
                  value={formBrand.kontak?.website || ''}
                  onChange={(e) =>
                    dispatch(
                      updateForm({
                        path: 'kontak.website',
                        value: e.target.value,
                      })
                    )
                  }
                />
              </Container>
              <Container className="w-full my-2">
                <Button className="w-full" onClick={() => handleNext()}>
                  Selanjutnya
                </Button>
              </Container>
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

export default BuatBrandChildren;
