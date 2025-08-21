import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import { RouteConfigStatic } from '@/app/config/route.config';
import { Skeleton } from '@/app/ui/skeleton';
import Link from 'next/link';

import { useQueryProps } from '@/app/types/api';
import ErrorMessage from '@/app/core/components/isError';
import Searching from '@/app/ui/searching';
import { useState } from 'react';

const HomeHeader = ({ data, isError, isMobile, isPending }: useQueryProps) => {
  const [fakeData, setFakeData] = useState<any>();
  if (isError) {
    return <ErrorMessage />;
  }

  if (isPending) {
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
              Jelajahi Seluruh Event Di Indonesia
            </Text>
          </Container>
          <Container className=" w-full justify-end items-center gap-2 mx-2 flex">
            <Container className="flex-col flex  justify-center ">
              <Text className="text-sm md:text-2xl w-full font-semibold">{data.data.fullname}</Text>
              <Text className="text-sm md:text-2xl w-full font-semibold">{data.data.provinsi}</Text>
              {!data.data.provinsi && (
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
              src={data.data.fotoProfile ? data.data.fotoProfile : '/asset/Profile.svg'}
              alt="Profile"
              width={isMobile ? 50 : 100}
              height={isMobile ? 50 : 100}
              className="rounded-full object-cover"
            />
          </Container>
        </Container>
        <Searching onChange={(e) => setFakeData(e)} value={fakeData} />
      </Container>
    </Container>
  );
};

export default HomeHeader;
