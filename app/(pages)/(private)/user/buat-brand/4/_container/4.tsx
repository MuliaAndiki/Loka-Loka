'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import BrandLayout from '@/app/core/layouts/brand-layout';
import { Text } from '@/app/ui/Text';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { Label } from '@/app/ui/label';
import { useAppDispatch, useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { IconBrandItch } from '@tabler/icons-react';
import { resetForm, setFormBrand } from '@/app/stores/BrandSlice/brandSlice';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/ui/button';
import { Textarea } from '@/app/ui/textarea';
import { useCreateBrand } from '@/app/hooks/mutation/brands/useCreateBrand';
import Fallback from '@/app/ui/fallback';
import { useEffect } from 'react';
import { flattenToFormData } from '@/app/utils/formdata';
import { formBikinBrandType } from '@/app/types/form';

const Slide4Children: React.FC = () => {
  const { isMobile } = useIsMobile();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formBrand = useAppSelector((state) => state.brand.currentForm);
  const currentId = useAppSelector((state) => state.auth.currentUser?.user._id);

  const { mutate: Create, isPending, isError } = useCreateBrand();
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
    Create(formData);
  };
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Container className="flex justify-center items-center flex-col">
            <IconBrandItch stroke={1.3} width={100} height={100} />
            <Container className="w-full mx-auto max-w-4/5 my-4 p-2 flex flex-col">
              <Container className="w-full mb-6">
                <Label className="text-lg md:text-2xl mb-2 font-semibold">Harapan :</Label>
                <Textarea
                  placeholder="Lampirkan Disini"
                  value={formBrand.description ?? ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(
                      setFormBrand({
                        path: 'description',
                        value: value,
                      })
                    );
                  }}
                />
              </Container>
              <Button className="w-full" onClick={() => handleCreateBrand()} disabled={isPending}>
                {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Sumbit'}
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

export default Slide4Children;
