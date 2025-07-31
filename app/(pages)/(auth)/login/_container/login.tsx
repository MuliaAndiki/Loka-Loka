'use client';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { formLoginSchema } from '@/app/types/form';
import { Input } from '@/app/ui/input';
import Container from '@/app/ui/container';
import { RouteConfigStatic } from '@/app/config/route.config';
import Image from 'next/image';
import { Button } from '@/app/ui/button';
import { Text } from '@/app/ui/Text';
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Fallback from '@/app/ui/fallback';
import NavLayout from '@/app/core/layouts/auth-layout';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import { useLogin } from '@/app/hooks/mutation/auth/useLogin';
import { IconLock, IconLockOpen } from '@tabler/icons-react';
import LoginHeader from '@/app/components/auth/login/login-header';
import LoginForm from '@/app/components/auth/login/login-form';
import LoginApp from '@/app/components/auth/login/login-app';
import LoginFooter from '@/app/components/auth/login/login-footer';

const LoginChild: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();

  const [formLogin, setFormLogin] = useState<formLoginSchema>({
    email: '',
    password: '',
  });

  const handleLoginGoogle = async (e: CredentialResponse) => {};
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { mutate: login, isPending } = useLogin();

  const handleLogin = () => {
    if (!formLogin.email || !formLogin.password) {
      alert.toast({
        title: 'Perhatian !',
        message: 'Mohon Isi Semua Colum',
        icon: 'warning',
      });
      return;
    }
    return login(formLogin);
  };
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <Container className="flex flex-col w-full mx-auto z-0">
            <LoginHeader isMobile={isMobile} />

            <Container className="mx-auto w-full max-w-[70%]">
              <Container className="mb-4 mt-4">
                <GoogleOAuthProvider clientId="">
                  <GoogleLogin
                    onSuccess={(e) => handleLoginGoogle(e)}
                    onError={() => console.log('Gagal Melakukan Login Menggunakan Google')}
                  />
                </GoogleOAuthProvider>
              </Container>

              <Container className="mb-4 mt-4 w-full ">
                <LoginForm
                  formLogin={formLogin}
                  setFormLogin={setFormLogin}
                  setShowPassword={setShowPassword}
                  showPassword={showPassword}
                />
              </Container>

              <LoginApp handleLogin={() => handleLogin()} isPending={isPending} />
            </Container>
            <Container className="flex justify-center items-center w-full flex-col">
              <LoginFooter />
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
export default LoginChild;
