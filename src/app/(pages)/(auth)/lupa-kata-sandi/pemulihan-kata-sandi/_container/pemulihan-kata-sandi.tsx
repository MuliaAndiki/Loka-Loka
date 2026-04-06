'use client';
import NavLayout from '@/app/core/layouts/auth-layout';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import Container from '@/app/ui/container';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useResetPassword } from '@/app/hooks/mutation/auth/useResetPassword';
import { formResetPasswordSchema } from '@/app/types/form';
import { useState, useRef } from 'react';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { useRouter } from 'next/navigation';
import PemulihanKataSandiHeader from '@/app/components/auth/pemulihan-kata-sandi/pemulihan-kata-sandi-header';
import PemulihanKataSandiForm from '@/app/components/auth/pemulihan-kata-sandi/pemulihan-kata-sandi-form';
import DesktopBlock from '@/app/components/desktop-block';

const PemulihanKataSandiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const router = useRouter();
  const { email: currentEmail, phoneNumber: currentPhoneNumber } = useAppSelector(
    (state) => state.otp
  );
  const [formResetPassword, setFormResetPassword] = useState<formResetPasswordSchema>({
    email: currentEmail,
    phoneNumber: currentPhoneNumber,
    password: '',
  });
  const source = useAppSelector((state) => state.otp.source);
  const alert = useAlert();
  const [showPasswordV1, setShowPasswordV1] = useState<boolean>(false);
  const [showPasswordV2, setShowPasswordV2] = useState<boolean>(false);
  const Reset = useResetPassword();

  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleResetPassword = () => {
    if (!formResetPassword.password) {
      alert.toast({
        title: 'Perhatian !',
        message: 'Password Harus Diisi',
        icon: 'warning',
      });
      return;
    }
    if (source === 'forgotPasswordByEmail') {
      if (!formResetPassword.email) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Email tidak ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      Reset.mutate({
        email: formResetPassword.email,
        phoneNumber: null,
        password: formResetPassword.password,
      });
    } else if (source === 'forgotPasswordByPhoneNumber') {
      if (!formResetPassword.phoneNumber) {
        alert.toast({
          title: 'Perhatian !',
          message: 'Phone Number tidak ditemukan',
          icon: 'warning',
          onVoid: () => {
            router.push('/login');
          },
        });
        return;
      }
      Reset.mutate({
        email: null,
        password: formResetPassword.password,
        phoneNumber: formResetPassword.phoneNumber,
      });
    } else {
      alert.toast({
        title: 'Perhatian !',
        message: 'Email & NomorHp Tidak Dikenali',
        icon: 'error',
        onVoid: () => {
          router.push('/login');
        },
      });
    }
  };

  return (
    <Container className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <PemulihanKataSandiHeader isMobile={isMobile} />
          <PemulihanKataSandiForm
            formResetPassword={formResetPassword}
            confirmPasswordRef={confirmPasswordRef}
            handleResetPassword={() => handleResetPassword()}
            isPending={Reset.isPending}
            setFormResetPassword={setFormResetPassword}
            setShowPasswordV1={setShowPasswordV1}
            setShowPasswordV2={setShowPasswordV2}
            showPasswordV1={showPasswordV1}
            showPasswordV2={showPasswordV2}
          />
        </NavLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default PemulihanKataSandiChildren;
