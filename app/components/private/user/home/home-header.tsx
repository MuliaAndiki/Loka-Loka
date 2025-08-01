import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import { RouteConfigStatic } from '@/app/config/route.config';
import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';
import Chart from '@/app/components/chart';
import { Skeleton } from '@/app/ui/skeleton';
import Link from 'next/link';
import { Input } from '@/app/ui/input';
import FilterHome from '@/app/core/components/filter-home';

const HomeHeader = ({ isMobile }: { isMobile: boolean }) => {
  const Profile = useGetProfileById();

  if (Profile.isError) {
    return (
      <Text className="text-lg md:text-lg">Mohon Maap Terjadi Kesalahan Saat Memuat Data</Text>
    );
  }

  if (Profile.isPending) {
    return (
      <Container className="w-full h-full">
        <Container className="flex justify-between items-center">
          <Skeleton className="w-full justify-start items-start flex mx-2 h-10" />
          <Skeleton className="w-full justify-end items-center gap-2 mx-2 flex h-10" />
        </Container>
      </Container>
    );
  }
  return (
    <Container as="main" className="w-full h-full ">
      <Container className="flex justify-center items-center flex-col">
        <Container className="flex justify-between items-center">
          <Container className="w-full justify-start items-start flex mx-2">
            <Text className="md:text-4xl text-sm font-bold">
              Jelajahi Event Yang Ada Di Seluruh Indonesia
            </Text>
          </Container>
          <Container className=" w-full justify-end items-center gap-2 mx-2 flex">
            <Chart />
            <Container className="flex-col flex  justify-center ">
              <Text className="text-sm md:text-2xl ">{Profile?.data.data.fullname}</Text>
              <Text className="text-sm md:text-2xl">{Profile.data.data.provinsi}</Text>
              {!Profile.data.data.provinsi && (
                <Container>
                  {RouteConfigStatic.map((items, key) => (
                    <Link key={key} href={items.daftarBrand.href}>
                      <Text className="text-sm">{items.daftarBrand.secoundTitle}</Text>
                    </Link>
                  ))}
                </Container>
              )}
            </Container>
            <Image
              src={
                Profile.data.data.fotoProfile ? Profile.data.data.fotoProfile : '/asset/Profile.svg'
              }
              alt="Profile"
              width={isMobile ? 50 : 100}
              height={isMobile ? 50 : 100}
              className="rounded-full object-cover"
            />
          </Container>
        </Container>
        <Container className="flex items-center gap-2 w-full px-4 mt-2">
          <Input placeholder="Pencarian" />
          <FilterHome />
        </Container>
      </Container>
    </Container>
  );
};

export default HomeHeader;
