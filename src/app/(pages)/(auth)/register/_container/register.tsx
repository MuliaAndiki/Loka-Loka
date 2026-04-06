'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import { formRegisterSchema } from '@/app/types/form';
import { useState } from 'react';
import { CredentialResponse } from '@react-oauth/google';
import NavLayout from '@/app/core/layouts/auth-layout';
import { useRegister } from '@/app/hooks/mutation/auth/useRegister';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import RegisterHeader from '@/app/components/auth/register/register-header';
import RegisterForm from '@/app/components/auth/register/register-form';
import DesktopBlock from '@/app/components/desktop-block';

const RegisterChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formRegister, setFormRegister] = useState<formRegisterSchema>({
    fullname: '',
    email: '',
    password: '',
  });

  const Register = useRegister();

  const handleRegister = () => {
    if (!formRegister.email || !formRegister.fullname || !formRegister.password) {
      alert.toast({
        title: 'Cek Kolom',
        message: 'Coba Lagi',
        icon: 'warning',
      });
      return;
    }
    return Register.mutate(formRegister);
  };

  const handleLoginGoogle = async (e: CredentialResponse) => {
    console.log(e.credential);
  };

  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <RegisterHeader isMobile={isMobile} />
          <RegisterForm
            formRegister={formRegister}
            handleLoginGoogle={(e) => handleLoginGoogle(e)}
            handleRegister={() => handleRegister()}
            isPending={Register.isPending}
            setFormRegister={setFormRegister}
          />
        </NavLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default RegisterChildren;
