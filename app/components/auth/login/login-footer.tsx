import Container from '@/app/ui/container';
import Link from 'next/link';
import { RouteConfigStatic } from '@/app/config/route.config';
import { Text } from '@/app/ui/Text';

const LoginFooter = () => {
  return (
    <Container as="section" className="flex justify-center items-center">
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
  );
};

export default LoginFooter;
