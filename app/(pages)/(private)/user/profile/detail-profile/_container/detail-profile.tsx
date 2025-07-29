'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import { RouteConfigStatic } from '@/app/config/route.config';
import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';

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
            <Container className="w-full ">
              <Text className="text-sm font-semibold">
                {data?.data.fullname ? data.data.fullname : 'Loading...'}
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
