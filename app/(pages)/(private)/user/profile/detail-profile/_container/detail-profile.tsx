'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import { RouteConfigStatic } from '@/app/config/route.config';
import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';
import { Label } from '@/app/ui/label';
import { IconEdit } from '@tabler/icons-react';
import Link from 'next/link';
import { formatDate } from '@/app/utils/string.format';
import { GenderFormat } from '@/app/utils/boolean.format';

const DetailProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const { data, isPending, isError } = useGetProfileById();

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center flex-col">
            <Image
              alt="profile"
              src={data?.data.fotoProfile ? data.data.fotoProfile : '/asset/Profile.svg'}
              className="object-cover rounded-full mb-6"
              width={100}
              height={100}
            />
          </Container>
          <Container className="w-full max-w-4/5 mx-auto">
            <Container className="w-full mb-6">
              <Label className="text-sm">Nama :</Label>
              <Container className="flex justify-between items-center">
                <Text className="text-sm font-semibold">
                  {data?.data.fullname ? data.data.fullname : 'Loading...'}
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.editProfile.href}>
                    <IconEdit stroke={2} />
                  </Link>
                ))}
              </Container>
            </Container>
            <Container className="w-full mb-6">
              <Label className="text-sm">Email :</Label>
              <Container className="flex justify-between items-center">
                <Text className="text-sm font-semibold">
                  {data?.data.email ? data.data.email : 'Loading...'}
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.editProfile.href}>
                    <IconEdit stroke={2} />
                  </Link>
                ))}
              </Container>
            </Container>
            <Container className="w-full mb-6">
              <Label className="text-sm">Nomor Handphone :</Label>
              <Container className="flex justify-between items-center">
                <Text className="text-sm font-semibold">
                  {data?.data.phoneNumber ? data.data.phoneNumber : 'Kosong...'}
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.editProfile.href}>
                    <IconEdit stroke={2} />
                  </Link>
                ))}
              </Container>
            </Container>
            <Container className="w-full mb-6">
              <Label className="text-sm">Lokasi :</Label>
              <Container className="flex justify-between items-center">
                <Text className="text-sm font-semibold">
                  {data?.data.provinsi ? data?.data.provinsi : 'Kosong...'}
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.editProfile.href}>
                    <IconEdit stroke={2} />
                  </Link>
                ))}
              </Container>
            </Container>
            <Container className="w-full mb-6">
              <Label className="text-sm">Gender :</Label>
              <Container className="flex justify-between items-center">
                <Text className="text-sm font-semibold">
                  {GenderFormat(data?.data.gender ? data?.data.gender : 'Kosong...')}
                </Text>
                {RouteConfigStatic.map((items, key) => (
                  <Link key={key} href={items.editProfile.href}>
                    <IconEdit stroke={2} />
                  </Link>
                ))}
              </Container>
            </Container>
            <Container className="w-full mb-6">
              <Label className="text-sm"> Akun Aktif :</Label>
              <Text className="text-sm font-semibold">
                {formatDate(data?.data.createdAt ? data.data.createdAt : 'Loading...')}
              </Text>
            </Container>
          </Container>
        </ProfileLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <Text>Website Ini Tidak Tersedia Di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default DetailProfileChildren;
