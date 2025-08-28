import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { RouteConfigStatic } from '@/app/config/route.config';
import Link from 'next/link';
import { TiketSchemaData } from '@/app/config/component.config';
import Tiket from '@/app/core/components/tiket';

const HomeRekomendasi = () => {
  return (
    <Container as="section" className="w-full h-full">
      <Container className="flex justify-between p-2 items-center">
        <Text className="text-lg md:text-4xl font-bold ">Rekomendasi :</Text>
        {RouteConfigStatic.map((items, key) => (
          <Link key={key} href={items.lihatSemuaRekomendasi.href}>
            <Text className="font-extralight text-sm">{items.lihatSemuaRekomendasi.title}</Text>
          </Link>
        ))}
      </Container>
      <Container className="p-2">
        <Container className="grid grid-cols-2 grid-rows-1 gap-4 ">
          {TiketSchemaData.slice(0, 4).map((items, key) => (
            <Container key={key} className="flex justify-center items-center">
              <Tiket data={items} />
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};
export default HomeRekomendasi;
