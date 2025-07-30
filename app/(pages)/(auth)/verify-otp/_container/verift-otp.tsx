'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import AuthLayout from '@/app/core/layouts/auth-layout';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/app/ui/input-otp';
import { useState } from 'react';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useVerifyOtp } from '@/app/hooks/mutation/auth/useVerifyOtp';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { Button } from '@/app/ui/button';
import { useSendOtp } from '@/app/hooks/mutation/auth/useSendOtp';
import Fallback from '@/app/ui/fallback';
import { IconUserScan } from '@tabler/icons-react';
import { formVerifyOtpSchema } from '@/app/types/form';
import { useRouter } from 'next/navigation';

const VerifyOtpChildren: React.FC = () => {
  const { isMobile } = useIsMobile();

  const source = useAppSelector((state) => state.otp.source);
  const alert = useAlert();
  const { email: currentEmail, phoneNumber: curentPhoneNumber } = useAppSelector(
    (state) => state.otp
  );
  const { mutate: verift, isPending } = useVerifyOtp();
  const { mutate: send } = useSendOtp();
  const router = useRouter();

  const [formVerifyOtp, setFormVerifyOt] = useState<formVerifyOtpSchema>({
    email: currentEmail,
    phoneNumber: curentPhoneNumber,
    otp: '',
  });
  const handleVerityOtp = () => {
    if (!formVerifyOtp.otp) {
      alert.toast({
        title: 'Perhatian !',
        message: 'Otp Tidak Boleh Kosong',
        icon: 'warning',
      });
      return;
    }
    if (source === 'forgotPasswordByEmail') {
      if (!formVerifyOtp.email) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Email Tidak Ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      verift({
        email: formVerifyOtp.email,
        otp: formVerifyOtp.otp,
        phoneNumber: null,
      });
    } else if (source === 'forgotPasswordByPhoneNumber') {
      if (!formVerifyOtp.phoneNumber) {
        alert.toast({
          title: 'Perhatian!',
          message: 'Nomor Hp Tidak Ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      verift({
        email: null,
        otp: formVerifyOtp.otp,
        phoneNumber: formVerifyOtp.phoneNumber,
      });
    } else if (source === 'register') {
      if (!formVerifyOtp.email) {
        alert.toast({
          title: 'Perhatian',
          message: 'Email Tidak Ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      verift({
        email: formVerifyOtp.email,
        otp: formVerifyOtp.otp,
        phoneNumber: null,
      });
    } else {
      alert.toast({
        title: 'Perhatian !',
        message: 'Otp Tidak Dikenali',
        icon: 'error',
      });
    }
  };

  const handleSendOtp = () => {
    if (!formVerifyOtp.email && !formVerifyOtp.phoneNumber) {
      alert.toast({
        title: 'Mohon Cek Kembali',
        message: 'Email Anda Tidak Terdaftar',
        icon: 'warning',
      });
      return;
    }

    if (source === 'forgotPasswordByEmail' || source === 'register') {
      if (!formVerifyOtp.email) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Email Tidak Dikenali',
          icon: 'success',
        });
        return;
      }
      send({ email: formVerifyOtp.email });
    } else if (source === 'forgotPasswordByPhoneNumber') {
      if (!formVerifyOtp.phoneNumber) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Nomor Hp Tidak Dikenali',
          icon: 'warning',
        });
        return;
      }
      send({ phoneNumber: formVerifyOtp.phoneNumber });
    } else {
      alert.toast({
        title: 'Gagal!',
        message: 'Sumber OTP tidak dikenali',
        icon: 'error',
      });
    }
  };

  return (
    <Container className="w-full h-screen">
      {isMobile && (
        <AuthLayout>
          <Container className="flex justify-center items-center flex-col">
            <Text className="text-lg md:text-4xl font-extrabold">Masukan Kode OTP Kamu</Text>
            <IconUserScan width={150} height={150} className="my-2" />
            <Container className="my-4 ">
              <InputOTP
                value={formVerifyOtp.otp}
                maxLength={6}
                onChange={(e) =>
                  setFormVerifyOt((prev) => ({
                    ...prev,
                    otp: e,
                  }))
                }
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </Container>

            <Container className="mx-auto max-w-[70%] w-full flex-col flex justify-center items-center">
              <Button onClick={() => handleVerityOtp()} disabled={isPending} className="w-full">
                {isPending ? <Fallback title="Tunggu " /> : 'Verifikasi'}
              </Button>
              <Container className="flex items-end justify-end w-full">
                <Text className="md:text-4xl text-sm  italic font-semibold ">
                  Tidak Menerima Kode Otp ?
                </Text>
              </Container>

              <Button onClick={() => handleSendOtp()} className="w-full">
                Kirim
              </Button>
            </Container>
          </Container>
        </AuthLayout>
      )}
      {!isMobile && (
        <Container as="main" className="w-screen h-screen ">
          <Container className="flex justify-center items-center">
            <Text>Website Ini Tidak Tersedia di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default VerifyOtpChildren;
