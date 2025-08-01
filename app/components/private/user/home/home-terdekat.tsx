import Container from '@/app/ui/container';
import Link from 'next/link';
import { Text } from '@/app/ui/Text';
import { RouteConfigStatic } from '@/app/config/route.config';
const HomeTerdekat = () => {
  return (
    <Container className="w-full p-2 ">
      <Container className="flex justify-between items-center">
        <Text className="md:text-4xl text-lg font-bold">Terdekat</Text>
        {RouteConfigStatic.map((items, key) => (
          <Link key={key} href={items.lihatSemuaTerdekat.href}>
            <Text className="font-extralight text-sm">{items.lihatSemuaTerdekat.title}</Text>
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default HomeTerdekat;
