import Container from '@/app/ui/container';
import { Label } from '@/app/ui/label';
import { Text } from '@/app/ui/Text';
import { useQueryProps } from '@/app/types/api';
import { RouteConfigStatic } from '@/app/config/route.config';
import Link from 'next/link';
import { IconEdit } from '@tabler/icons-react';
import { GenderFormat } from '@/app/utils/boolean.format';
import { formatDate } from '@/app/utils/string.format';
import { Skeleton } from '@/app/ui/skeleton';
import ErrorMessage from '@/app/core/components/isError';
const DetailProfileContent = ({ data, isError, isPending }: useQueryProps) => {
  if (isError) {
    <ErrorMessage />;
  }

  if (isPending) {
  }

  return (
    <Container className="w-full max-w-4/5 mx-auto">
      <Container className="w-full mb-6">
        <Label className="text-sm">Nama :</Label>
        <Container className="flex justify-between items-center">
          <Text className="text-sm font-semibold">
            {data?.data.fullname ? data.data.fullname : <Skeleton className="w-65 h-7" />}
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
            {data?.data.email ? data.data.email : <Skeleton className="w-65 h-7" />}
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
            {data?.data.phoneNumber ? data.data.phoneNumber : <Skeleton className="w-65 h-7" />}
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
            {data?.data.provinsi == null ? (
              <Text>Kosong..</Text>
            ) : data.data.provinsi === '' ? (
              <Skeleton className="w-65 h-7" />
            ) : (
              data.data.provinsi
            )}
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
            {GenderFormat(
              data?.data.gender ? data?.data.gender : <Skeleton className="w-65 h-7" />
            )}
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
  );
};

export default DetailProfileContent;
