import { Button } from '@/app/ui/button';
import Container from '@/app/ui/container';
import Fallback from '@/app/ui/fallback';
import { RouteConfigStatic } from '@/app/config/route.config';
import Link from 'next/link';
import { Text } from '@/app/ui/Text';

const LoginApp = ({ handleLogin, isPending }: { handleLogin: () => void; isPending: boolean }) => {
  return (
    <Container className="w-full h-full">
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

export default LoginApp;
