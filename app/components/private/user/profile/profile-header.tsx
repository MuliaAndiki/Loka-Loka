import Container from '@/app/ui/container';
import Image from 'next/image';
import { Text } from '@/app/ui/Text';
import Link from 'next/link';
import { Skeleton } from '@/app/ui/skeleton';
import { RouteConfigStatic } from '@/app/config/route.config';
import { useQueryProps } from '@/app/types/api';
import ErrorMessage from '@/app/core/components/isError';

const ProfileHeader = ({ isMobile, isError, isPending, data }: useQueryProps) => {
  if (isError) {
    return <ErrorMessage />;
  }

  if (isPending) {
    return (
      <Container className="w-full h-full">
        <Container className="flex justify-between items-center">
          <Skeleton className="w-full justify-start items-start flex mx-2 h-20" />
        </Container>
      </Container>
    );
  }
  return (
    <Container as="header" className="flex justify-around items-center">
      <Container className="flex justify-center items-center gap-4">
        <Image
          alt="Profile"
          src={data.data.fotoProfile ? data.data.fotoProfile : '/asset/Profile.svg'}
          width={isMobile ? 80 : 100}
          height={isMobile ? 80 : 100}
          className="rounded-full object-contain border aspect-square"
        />
        <Container className="flex justify-center items-start flex-col">
          <Text className="text-lg md:text-4xl">{data.data.fullname}</Text>
          {!data.data.lokasi && (
            <Container>
              {RouteConfigStatic.map((items, key) => (
                <Link key={key} href={items.daftarBrand.href}>
                  <Text className="text-sm ">{items.daftarBrand.title}</Text>
                </Link>
              ))}
            </Container>
          )}
          <Text>{data.data.lokasi}</Text>
        </Container>
      </Container>
      <Container className="">
        {RouteConfigStatic.map((items, key) => (
          <Link key={key} href={items.editProfile.href}>
            <items.editProfile.title />
          </Link>
        ))}
      </Container>
    </Container>
  );
};

export default ProfileHeader;
