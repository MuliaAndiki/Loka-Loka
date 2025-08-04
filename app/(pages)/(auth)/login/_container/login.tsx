'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import { useState } from 'react';
import { formLoginSchema } from '@/app/types/form';
import Container from '@/app/ui/container';
import { CredentialResponse } from '@react-oauth/google';
import NavLayout from '@/app/core/layouts/auth-layout';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { useLogin } from '@/app/hooks/mutation/auth/useLogin';
import LoginHeader from '@/app/components/auth/login/login-header';
import LoginForm from '@/app/components/auth/login/login-form';
import LoginFooter from '@/app/components/auth/login/login-footer';
import DesktopBlock from '@/app/components/desktop-block';

const LoginChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formLogin, setFormLogin] = useState<formLoginSchema>({
    email: '',
    password: '',
  });
  const handleLoginGoogle = async (e: CredentialResponse) => {
    console.log(e.credential);
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const Login = useLogin();
  const handleLogin = () => {
    if (!formLogin.email || !formLogin.password) {
      alert.toast({
        title: 'Perhatian !',
        message: 'Mohon Isi Semua Colum',
        icon: 'warning',
      });
      return;
    }
    return Login.mutate(formLogin);
  };
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <LoginHeader isMobile={isMobile} />
          <Container className=" mt-4 w-full ">
            <LoginForm
              formLogin={formLogin}
              setFormLogin={setFormLogin}
              setShowPassword={setShowPassword}
              showPassword={showPassword}
              handleLogin={() => handleLogin()}
              isPending={Login.isPending}
              handleLoginGoogle={(e) => handleLoginGoogle(e)}
            />
          </Container>
          <LoginFooter />
        </NavLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};
export default LoginChildren;
