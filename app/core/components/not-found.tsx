"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/app/ui/button";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <Container className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Text className="text-6xl font-bold text-gray-800">404</Text>
      <Text className="mt-4 text-lg text-gray-600">
        Halaman yang Anda cari tidak ditemukan.
      </Text>
      <Button className="mt-6" onClick={() => router.push("/")}>
        Kembali ke Beranda
      </Button>
    </Container>
  );
};

export default NotFound;
