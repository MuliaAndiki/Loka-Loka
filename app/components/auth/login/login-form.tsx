import Container from '@/app/ui/container';
import { formLoginSchema } from '@/app/types/form';
import React from 'react';
import { Input } from '@/app/ui/input';
import { IconLock, IconLockOpen } from '@tabler/icons-react';

const LoginForm = ({
  formLogin,
  setFormLogin,
  showPassword,
  setShowPassword,
}: {
  formLogin: formLoginSchema;
  setFormLogin: React.Dispatch<React.SetStateAction<formLoginSchema>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
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
  );
};

export default LoginForm;
