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

const LoginChild: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();

  const [formLogin, setFormLogin] = useState<formLoginSchema>({
    email: '',
    password: '',
  });

  const handleLoginGoogle = async (e: CredentialResponse) => {};
  const [showPassword, setShowPassword] = useState<boolean>();

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
          <Container className={`w-full h-full `}>
            <Container className="flex flex-col w-full mx-auto z-0">
              <Container className="flex flex-col justify-center items-center">
                <Image
                  className="object-cover h-auto"
                  src="/asset/iconFix.png"
                  alt="Icon"
                  width={isMobile ? 300 : 400}
                  height={isMobile ? 300 : 400}
                />

                <Text className="font-bold">Selamat Datang Di Loka-Loka</Text>
                <Text className="font-light">Masukkan Akun Kamu Untuk Lanjut !</Text>
              </Container>

              <Container className="mx-auto w-full max-w-[70%]">
                <Container className="mb-4 mt-4">
                  <GoogleOAuthProvider clientId="">
                    <GoogleLogin
                      onSuccess={(e) => handleLoginGoogle(e)}
                      onError={() => console.log('Gagal Melakukan Login Menggunakan Google')}
                    />
                  </GoogleOAuthProvider>
                </Container>

                <Container className="mb-4 mt-4 ">
                  <Input
                    placeholder="Email"
                    name={formLogin.email}
                    value={formLogin.email}
                    className="w-full"
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>

                <Container className="mb-2 relative ">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Kata Sandi"
                    name={formLogin.password}
                    value={formLogin.password}
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, password: e.target.value };
                        return newObj;
                      })
                    }
                  />
                  <button
                    type="button"
                    aria-Text={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <IconLockOpen /> : <IconLock />}
                  </button>
                </Container>

                <Button onClick={() => handleLogin()} disabled={isPending} className="w-full my-2">
                  {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Masuk'}
                </Button>
                <Container className="text-end w-full">
                  {RouteConfigStatic.map((route, key) => (
                    <Link key={key} href={route.lupaKataSandi.href}>
                      <Text className="text-sm md:text-2xl">{route.lupaKataSandi.title}</Text>
                    </Link>
                  ))}
                </Container>
              </Container>

              <Container className="flex justify-center items-center w-full flex-col">
                <Container className="flex gap-1">
                  <p>Tidak Memiliki Akun?</p>
                  {RouteConfigStatic.map((items, key) => (
                    <Container key={key} className="flex ">
                      <Link href={items.register.href}>
                        <Text className="hover:text-[var(--custom-hover)] hover:duration-[0.3s]">
                          {items.register.title}
                        </Text>
                      </Link>
                    </Container>
                  ))}
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
export default LoginChild;
