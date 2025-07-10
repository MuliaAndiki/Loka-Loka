import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import Image from "next/image";

const KategoriHome: React.FC = () => {
  return (
    <Container className="w-full h-full ">
      <Container className="bg-[var(--shape-parent)] flex justify-center items-center rounded-lg p-2">
        <Text>Kategori</Text>
      </Container>
    </Container>
  );
};

export default KategoriHome;
