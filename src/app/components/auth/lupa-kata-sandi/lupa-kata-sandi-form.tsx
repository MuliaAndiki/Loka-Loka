import Container from '@/app/ui/container';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { Text } from '@/app/ui/Text';
import { LupaKataSandiFormProps } from '@/app/types/components';
import { RouteConfigStatic } from '@/app/config/route.config';
import Fallback from '@/app/ui/fallback';

const LupaKataSandiForm = ({
  formForgotPassword,
  setFormForgotPassword,
  handleForgotPassword,
  isPending,
}: LupaKataSandiFormProps) => {
  return (
    <Container as="section" className="w-full max-w-[70%] mx-auto">
      <Container className="my-2">
        <Input
          placeholder="Email"
          value={formForgotPassword.email}
          onChange={(e) =>
            setFormForgotPassword((prev) => {
              const newObj = { ...prev, email: e.target.value };
              return newObj;
            })
          }
        />
      </Container>
      <Button
        className="w-full font-semibold"
        onClick={() => handleForgotPassword()}
        disabled={isPending}
      >
        {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Verifikasi'}
      </Button>
      <Container className="w-full text-center my-1">
        {RouteConfigStatic.map((items, key) => (
          <Link key={key} href={items.metodeLain.href}>
            <Text className="text-sm md:text-2xl font-semibold hover:text-[var(--custom-hover)]">
              {items.metodeLain.title}
            </Text>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default LupaKataSandiForm;
