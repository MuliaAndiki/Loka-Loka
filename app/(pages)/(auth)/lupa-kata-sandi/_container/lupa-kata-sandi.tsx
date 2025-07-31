'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import NavLayout from '@/app/core/layouts/auth-layout';
import { useForgotPasswordByEmail } from '@/app/hooks/mutation/auth/useForgotPasswordByEmail';
import { formSendOtpEmail } from '@/app/types/form';
import { useState } from 'react';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import LupaKataSandiHeader from '@/app/components/auth/lupa-kata-sandi/lupa-kata-sandi-header';
import LupaKataSandiForm from '@/app/components/auth/lupa-kata-sandi/lupa-kata-sandi-form';
import DesktopBlock from '@/app/components/desktop-block';

const LupaKataSandiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formForgotPassword, setFormForgotPassword] = useState<formSendOtpEmail>({
    email: '',
  });

  const { mutate: forgot, isPending } = useForgotPasswordByEmail();

  const handleForgotPassword = () => {
    if (!formForgotPassword.email) {
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
    <Container className="w-full min-h-screen" as="main">
      {isMobile && (
        <NavLayout>
          <LupaKataSandiHeader isMobile={isMobile} />
          <LupaKataSandiForm
            formForgotPassword={formForgotPassword}
            setFormForgotPassword={setFormForgotPassword}
            handleForgotPassword={() => handleForgotPassword()}
            isPending={isPending}
          />
        </NavLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default LupaKataSandiChildren;
