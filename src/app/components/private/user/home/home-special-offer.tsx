import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import { RouteConfigStatic } from '@/app/config/route.config';
import Link from 'next/link';
import { Label } from '@/app/ui/label';
import { SpesialOfficerData } from '@/app/config/component.config';
import SpesialOfficer from '@/app/core/components/spesial-officer';

const HomeSpecialOfficer: React.FC = () => {
  return (
    <Container as="main" className="w-full h-full">
      <Container className=" mb-10 w-full">
        <Container className="flex justify-between items-center p-2">
          <Text className="text-lg font-bold ">Special Offer :</Text>
          {RouteConfigStatic.map((items, key) => (
            <Link href={items.spesialOfficer.href} key={key}>
              <Label className="cursor-pointer">{items.spesialOfficer.title}</Label>
            </Link>
          ))}
        </Container>
        {SpesialOfficerData.map((items, key) => (
          <SpesialOfficer key={key} data={items} />
        ))}
      </Container>
    </Container>
  );
};

export default HomeSpecialOfficer;
