import Container from '@/app/ui/container';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import { Text } from '@/app/ui/Text';
import Link from 'next/link';
import { RouteConfigStatic } from '@/app/config/route.config';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { RegisterFormProps } from '@/app/types/components';
import Fallback from '@/app/ui/fallback';

const RegisterForm = ({
  formRegister,
  setFormRegister,
  handleLoginGoogle,
  isPending,
  handleRegister,
}: RegisterFormProps) => {
  return (
    <Container className="mx-auto w-full max-w-[70%]">
      <Container className="w-full text-center"></Container>
      <Container className="my-1">
        <GoogleOAuthProvider clientId="">
          <GoogleLogin
            onSuccess={(e) => handleLoginGoogle(e)}
            onError={() => console.log('Gagal Melakukan Login Menggunakan Google')}
          />
        </GoogleOAuthProvider>
      </Container>

      <Container className="my-2">
        <Input
          placeholder="Nama"
          name={formRegister.fullname}
          value={formRegister.fullname}
          onChange={(e) =>
            setFormRegister((prev) => {
              const newObj = { ...prev, fullname: e.target.value };
              return newObj;
            })
          }
        />
      </Container>

      <Container className="my-2">
        <Input
          placeholder="Email"
          type="email"
          inputMode="email"
          name={formRegister.email}
          value={formRegister.email}
          onChange={(e) =>
            setFormRegister((prev) => {
              const newObj = { ...prev, email: e.target.value };
              return newObj;
            })
          }
        />
      </Container>
      <Container className="my-2">
        <Input
          placeholder="Kata Sandi"
          type="password"
          name={formRegister.password}
          value={formRegister.password}
          onChange={(e) =>
            setFormRegister((prev) => {
              const newObj = { ...prev, password: e.target.value };
              return newObj;
            })
          }
        />
      </Container>

      <Button className="w-full " onClick={() => handleRegister()} disabled={isPending}>
        {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Daftar'}
      </Button>
      <Container className="w-full flex items-center justify-center gap-1">
        <Text className="text-center text-sm lg:text-4xl">Sudah Memiliki Akun?</Text>
        {RouteConfigStatic.map((route, key) => (
          <Link key={key} href={route.login.href}>
            <Text className="hover:text-[var(--custom-hover)] hover:duration-[0.2s] text-sm md:text-2xl">
              {route.login.title}
            </Text>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default RegisterForm;
