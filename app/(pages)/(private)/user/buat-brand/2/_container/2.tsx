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
import { updateForm } from '@/app/stores/BrandSlice/brandSlice';

const Slide2Children: React.FC = () => {
  const { isMobile } = useIsMobile();
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const formBrand = useAppSelector((state) => state.brand.currentForm);
  const router = useRouter();

  const handleNext = () => {};
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <BrandLayout>
          <Container className="flex justify-center items-center flex-col">
            <IconBrandItch stroke={1.3} width={100} height={100} />
            <Container className="w-full max-w-4/5 mx-auto my-4 flex flex-col">
              <Container className="w-full">
                <Label className="mb-2 text-lg md:text-2xl font-bold">NIK :</Label>
                <Input
                  className="w-full"
                  type="number"
                  value={formBrand.document?.other ?? ''}
                  onChange={(e) =>
                    dispatch(
                      updateForm({
                        path: 'document.other',
                        value: e.target.value,
                      })
                    )
                  }
                />
              </Container>
              <Container className="w-full">
                <Label></Label>
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

export default Slide2Children;
