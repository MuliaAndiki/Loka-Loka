import Container from '@/app/ui/container';
import Link from 'next/link';
import { Text } from '@/app/ui/Text';
import { RouteConfigStatic } from '@/app/config/route.config';
import Brands from '@/app/core/components/brand-home';
import { BrandHomeData } from '@/app/config/component.config';

const HomeBrand = () => {
  return (
    <Container className="flex justify-center items-center flex-col p-2">
      <Container className="flex justify-between items-center w-full ">
        <Text className="md:text-4xl text-lg font-bold">Terdekat :</Text>
        {RouteConfigStatic.map((items, key) => (
          <Link key={key} href={items.lihatSemuaTerdekat.href}>
            <Text className="font-extralight text-sm">{items.lihatSemuaTerdekat.title}</Text>
          </Link>
        ))}
      </Container>
      {BrandHomeData.map((items, key) => (
        <Brands key={key} data={items} />
      ))}
    </Container>
  );
};

export default HomeBrand;
