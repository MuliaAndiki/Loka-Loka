import Container from '@/app/ui/container';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import { RiwayatComponetsProps } from '@/app/types/props';

const RiwayatComponent: React.FC<RiwayatComponetsProps> = ({ data }) => {
  return (
    <Container className="flex justify-between items-center h-full shadow p-2 rounded-lg  ">
      <Container className=" flex gap-4">
        <Image alt="events" src={data.image} width={100} height={100} className="rounded-lg " />
        <Container className="flex justify-start items-start flex-col">
          <Label className="text-lg font-semibold">{data.title}</Label>
          <Label className="text-sm font-light">{data.date}</Label>
          {/* Cancel button in state */}
          {/* <Label className="text-sm font-light">Tanggal</Label> */}
        </Container>
      </Container>

      <Container className="flex justify-center items-start flex-col">
        <Label className="text-lg font-extrabold">{data.label}</Label>
        <Label className="text-lg font-extrabold">{data.pricing}</Label>
        <Label className="text-lg font-extrabold">{data.items} items</Label>
      </Container>
    </Container>
  );
};

export default RiwayatComponent;
