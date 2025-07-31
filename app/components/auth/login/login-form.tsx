import Container from '@/app/ui/container';
import { formLoginSchema } from '@/app/types/form';
import React from 'react';
import { Input } from '@/app/ui/input';
import { IconLock, IconLockOpen } from '@tabler/icons-react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { Button } from '@/app/ui/button';
import Fallback from '@/app/ui/fallback';
import Link from 'next/link';
import { RouteConfigStatic } from '@/app/config/route.config';
import { Text } from '@/app/ui/Text';
import { LoginFormProps } from '@/app/types/components';

const LoginForm = ({
  formLogin,
  handleLogin,
  handleLoginGoogle,
  isPending,
  setFormLogin,
  setShowPassword,
  showPassword,
}: LoginFormProps) => {
  return (
    <Container className="mx-auto w-full max-w-[70%] ">
      <Container className="mb-4 mt-4">
        <GoogleOAuthProvider clientId="">
          <GoogleLogin
            onSuccess={(e) => handleLoginGoogle(e)}
            onError={() => console.log('Gagal Melakukan Login Menggunakan Google')}
          />
        </GoogleOAuthProvider>
      </Container>
      <Container className="flex justify-center items-center flex-col gap-4 ">
        <Input
          placeholder="Email"
          type="email"
          inputMode="email"
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

        <Container className="relative w-full">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Kata Sandi"
            name={formLogin.password}
            value={formLogin.password}
            className="w-full"
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
      </Container>
      <Button onClick={handleLogin} disabled={isPending} className="w-full my-2">
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
  );
};

export default LoginForm;
