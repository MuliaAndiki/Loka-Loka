'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import NavLayout from '@/app/core/layouts/auth-layout';
import { formSendOtpPhoneNumber } from '@/app/types/form';
import { useState } from 'react';
import { useForgotPasswordByPhoneNumber } from '@/app/hooks/mutation/auth/useForgotPasswordByPhoneNumber';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import MetodeLainHeader from '@/app/components/auth/metode-lain/metode-lain-header';
import DesktopBlock from '@/app/components/desktop-block';
import MetodeLainForm from '@/app/components/auth/metode-lain/metode-lain-form';

const MetodeLainChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formForgotPassword, setFormForgotPassword] = useState<formSendOtpPhoneNumber>({
    phoneNumber: '',
  });

  const Forgot = useForgotPasswordByPhoneNumber();
  const handleForgotPassword = () => {
    if (!formForgotPassword.phoneNumber) {
      alert.toast({
        title: 'Hati - Hati',
        message: 'Mohon Isi Semua Kolum',
        icon: 'warning',
      });
      return;
    }
    return Forgot.mutate(formForgotPassword);
  };

  return (
    <Container as="main" className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <MetodeLainHeader />
          <MetodeLainForm
            formForgotPassword={formForgotPassword}
            handleForgotPassword={() => handleForgotPassword()}
            isPending={Forgot.isPending}
            setFormForgotPassword={setFormForgotPassword}
          />
        </NavLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default MetodeLainChildren;
