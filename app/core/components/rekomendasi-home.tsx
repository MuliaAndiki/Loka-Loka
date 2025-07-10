import Container from "../../ui/container";
import { Text } from "../../ui/Text";
import Image from "next/image";
import { RekomendasiSchemaProps } from "../../types/props";
import Shape from "@/app/ui/shape";

const RekomendasiHome: React.FC<RekomendasiSchemaProps> = ({ data }) => {
  return (
    <Container className=" bg-[var(--shape-parent)] p-4 flex justify-center items-center flex-col rounded-lg  w-full shadow-md/20 relative z-0 ">
      <Shape className="w-20 h-20 rounded-full bg-[var(--shape-child)]  absolute z-[-5] top-0 left-0  blur-md" />
      <Shape className="w-20 h-20 rounded-full bg-[var(--shape-child)]  absolute z-[-5] bottom-0 right-0  blur-md" />
      <Image
        src={data.image}
        alt="Tiket"
        width={100}
        height={100}
        className="object-cover h-auto "
      />
      <Text className="md:text-4xl text-lg font-bold">{data.title}</Text>
      <Text className="md:text-4xl text-sm italic">{data.organizer}</Text>
      <Text className="md:text-4xl font-extrabold italic">Rp.{data.price}</Text>
    </Container>
  );
};

export default RekomendasiHome;
