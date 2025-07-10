import Container from "../ui/container";
import { Text } from "../ui/Text";
import Image from "next/image";
import { RekomendasiSchemaProps } from "../types/props";

const RekomendasiHome: React.FC<RekomendasiSchemaProps> = ({ data }) => {
  return (
    <Container className=" border bg-[var(--shape-parent)] px-2 flex justify-center items-center flex-col rounded-lg  w-full ">
      <Image
        src={data.image}
        alt="Tiket"
        width={100}
        height={100}
        className="object-cover h-auto"
      />
      <Text className="md:text-4xl text-lg font-bold">{data.title}</Text>
      <Text className="md:text-4xl text-sm italic">{data.organizer}</Text>
      <Text className="md:text-4xl font-extrabold italic">{data.price}</Text>
    </Container>
  );
};

export default RekomendasiHome;
