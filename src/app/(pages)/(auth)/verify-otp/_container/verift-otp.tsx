'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import AuthLayout from '@/app/core/layouts/auth-layout';
import { useState } from 'react';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useVerifyOtp } from '@/app/hooks/mutation/auth/useVerifyOtp';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { useSendOtp } from '@/app/hooks/mutation/auth/useSendOtp';
import { formVerifyOtpSchema } from '@/app/types/form';
import { useRouter } from 'next/navigation';
import VerifyOtpHeader from '@/app/components/auth/verify-otp/verify-otp-header';
import VerifyOtpForm from '@/app/components/auth/verify-otp/verify-otp-form';
import DesktopBlock from '@/app/components/desktop-block';
import VerifyOtpFooter from '@/app/components/auth/verify-otp/verify-otp-footer';

const VerifyOtpChildren: React.FC = () => {
  const { isMobile } = useIsMobile();

  const source = useAppSelector((state) => state.otp.source);
  const alert = useAlert();
  const { email: currentEmail, phoneNumber: curentPhoneNumber } = useAppSelector(
    (state) => state.otp
  );
  const VerifyOtp = useVerifyOtp();
  const sendOtp = useSendOtp();
  const router = useRouter();

  const [formVerifyOtp, setFormVeriftOtp] = useState<formVerifyOtpSchema>({
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
      VerifyOtp.mutate({
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
      VerifyOtp.mutate({
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
      VerifyOtp.mutate({
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
      sendOtp.mutate({ email: formVerifyOtp.email });
    } else if (source === 'forgotPasswordByPhoneNumber') {
      if (!formVerifyOtp.phoneNumber) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Nomor Hp Tidak Dikenali',
          icon: 'warning',
        });
        return;
      }
      sendOtp.mutate({ phoneNumber: formVerifyOtp.phoneNumber });
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
          <VerifyOtpHeader />
          <VerifyOtpForm
            formVerifyOtp={formVerifyOtp}
            handleVerifyOtp={() => handleVerityOtp()}
            isPending={VerifyOtp.isPending}
            setFormVerifyOtp={setFormVeriftOtp}
          />
          <VerifyOtpFooter handleSendOtp={() => handleSendOtp()} isPending={sendOtp.isPending} />
        </AuthLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};
export default VerifyOtpChildren;
