import Container from '@/app/ui/container';
import Image from 'next/image';
import { useQueryProps } from '@/app/types/api';

const DetailProfileHeader = ({ data, isMobile }: useQueryProps) => {
  return (
    <Container as="main" className="flex justify-center items-center flex-col">
      <Image
        alt="profile"
        src={data?.data.fotoProfile ? data.data.fotoProfile : '/asset/Profile.svg'}
        className="object-cover rounded-full mb-6"
        width={isMobile ? 100 : 130}
        height={isMobile ? 100 : 130}
      />
    </Container>
  );
};

export default DetailProfileHeader;
