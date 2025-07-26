'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import NavLayout from '@/app/core/layouts/auth-layout';
import { Text } from '@/app/ui/Text';
import { Button } from '@/app/ui/button';
import { Input } from '@/app/ui/input';
import { IconLockOpenOff } from '@tabler/icons-react';
import { formSendOtpPhoneNumber } from '@/app/types/form';
import { useState } from 'react';
import { useForgotPasswordByPhoneNumber } from '@/app/hooks/mutation/auth/useForgotPasswordByPhoneNumber';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import Fallback from '@/app/ui/fallback';

const MetodeLainChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formForgotPassword, setFormForgotPassword] = useState<formSendOtpPhoneNumber>({
    phoneNumber: '',
  });
  const { mutate: forgot, isPending } = useForgotPasswordByPhoneNumber();
  const handleForgotPassword = () => {
    if (!formForgotPassword.phoneNumber) {
      alert.toast({
        title: 'Hati - Hati',
        message: 'Mohon Isi Semua Kolum',
        icon: 'warning',
      });
      return;
    }
    return forgot(formForgotPassword);
  };

  return (
    <Container as="main" className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <Container className={`w-full h-full relative`}>
            <Container className="flex justify-center items-center flex-col">
              <Text className="text-lg md:text-4xl font-bold">Metode Lain</Text>
              <IconLockOpenOff width={150} height={150} className="my-2" />
              <Text className="text-sm md:text-2xl">
                Mohon Masukkan Kontak Anda Untuk Melakukan Pemulihan
              </Text>
              <Container className="w-full max-w-[70%]">
                <Container className="my-2">
                  <Input
                    placeholder="Nomor Telepon"
                    value={formForgotPassword.phoneNumber}
                    onChange={(e) =>
                      setFormForgotPassword((prev) => {
                        const newObj = { ...prev, phoneNumber: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="my-2">
                  <Button
                    className="w-full"
                    onClick={() => handleForgotPassword()}
                    disabled={isPending}
                  >
                    {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Verifikasi'}
                  </Button>
                </Container>
              </Container>
            </Container>
          </Container>
        </NavLayout>
      )}
      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center">
            <Text>Website Ini Tidak Tersedia di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default MetodeLainChildren;
