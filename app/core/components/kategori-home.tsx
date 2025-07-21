import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import Link from "next/link";
import { KategoriSchemaProps } from "@/app/types/props";

const KategoriHome: React.FC<KategoriSchemaProps> = ({ data }) => {
  return (
    <Container className="w-auto h-full">
      <Link href={data.href}>
        <Container className="bg-[var(--shapeV1-parent)] flex justify-center items-center rounded-lg p-2 shadow-md/20 flex-col ">
          <Image
            src={data.image}
            alt="icon"
            width={120}
            height={120}
            className="object-cover h-auto "
          />
          <Text className="text-lg md:text-4xl font-bold">{data.title}</Text>
        </Container>
      </Link>
    </Container>
  );
};

export default KategoriHome;
