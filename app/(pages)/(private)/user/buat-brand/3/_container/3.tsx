'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { Text } from '@/app/ui/Text';
import { Input } from '@/app/ui/input';
import { IconBrandItch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { Label } from '@/app/ui/label';
import { useAppDispatch } from '@/app/hooks/dispatch/dispatch';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import { Button } from '@/app/ui/button';

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
          <Container className="flex justify-center items-center flex-col">
            <IconBrandItch stroke={1.3} width={100} height={100} />
            <Text>Sosial Media</Text>
            <Container className="w-full max-w-4/5 mx-auto flex flex-col my-4">
              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Instagram :</Label>
                <Input
                  placeholder="Masukkan Instagram"
                  value={formBrand.sosialMedia?.instagram ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(
                      setFormBrand({
                        path: 'sosialMedia.instagram',
                        value: value,
                      })
                    );
                  }}
                />
                <Text className="flex justify-end font-semibold text-red-500">*tidak wajib</Text>
              </Container>

              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Facebook :</Label>
                <Input
                  placeholder="Masukkan Facebook"
                  value={formBrand.sosialMedia?.facebook ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(
                      setFormBrand({
                        path: 'sosialMedia.facebook',
                        value: value,
                      })
                    );
                  }}
                />
                <Label className="flex justify-end font-semibold text-red-500">*tidak wajib</Label>
              </Container>
              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Tiktok :</Label>
                <Input
                  placeholder="Masukkan TikTok"
                  value={formBrand.sosialMedia?.tiktok ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(
                      setFormBrand({
                        path: 'sosialMedia.tiktok',
                        value: value,
                      })
                    );
                  }}
                />
                <Label className="flex justify-end font-semibold text-red-500">*tidak wajib</Label>
              </Container>

              <Container className="w-full mb-6">
                <Label className="mb-2 text-lg md:text-2xl font-semibold">Lainnya :</Label>
                <Input
                  placeholder="Lainnya"
                  value={formBrand.sosialMedia?.other ?? ''}
                  onChange={(e) => {
                    const newValue = [e.target.value];
                    dispatch(
                      setFormBrand({
                        path: 'sosialMedia.other',
                        value: newValue,
                      })
                    );
                  }}
                />
                <Label className="flex justify-end font-semibold text-red-500">*tidak wajib</Label>
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

export default Slide3Children;
