import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';

import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';
import Chart from '../../components/chart';
import { Skeleton } from '@/app/ui/skeleton';

const CardProfile: React.FC = () => {
  const { data, isPending, isError } = useGetProfileById();

  if (isError) {
    return (
      <Text className="text-lg md:text-lg">Mohon Maap Terjadi Kesalahan Saat Memuat Data</Text>
    );
  }
  if (isPending) {
    return <Skeleton className="rounded-full w-[100px] h-[20]" />;
  }
  return (
    <Container className="w-full h-full ">
      <Container className="flex justify-between items-center">
        <Container className="w-full ">
          <Container className="w-full justify-start items-start flex mx-2">
            <Text className="md:text-4xl text-sm font-bold">
              Jelajahi Event Yang Ada Di Seluruh Indonesia
            </Text>
          </Container>
        </Container>
        <Container className=" w-full justify-end items-center gap-2 mx-2 flex">
          <Chart />
          <Container className="flex-col flex items-end justify-center">
            <Text className="text-sm md:text-2xl ">{data?.data.fullname}</Text>
            <Text className="text-sm md:text-2xl">{data.data.lokasi}</Text>
          </Container>
          <Image
            src="/asset/Profile.svg"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-xl object-cover"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default CardProfile;
