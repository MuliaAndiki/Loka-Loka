"use client";

import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import ProfileLayout from "@/app/core/layouts/profile-layout";
import AboutUsChart from "@/app/components/about-us";
const TentangKamiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center flex-col">
            <Container className="w-full p-4">
              <AboutUsChart />
            </Container>
            <Container className="w-full max-w-2xl mx-auto p-4 flex-col flex  justify-around">
              <Text className="font-semibold whitespace-pre-line text-xl my-2">
                Tentang Kami :
              </Text>
              <Text className="text-justify text-md my-2">
                Loka-Loka adalah platform event yang saya, Mulia Andiki,
                kembangkan secara mandiri untuk memudahkan siapa pun menemukan
                dan mengikuti berbagai acara menarik—mulai dari Festival,
                Konser, Workshop, Seminar, hingga Komunitas, Teknologi, dan
                Acara Jejepangan. Dengan dukungan kategori beragam seperti
                Pameran, Kompetisi, Kuliner, Olahraga, Nonton Bareng, hingga
                Kegiatan Sosial, Keagamaan, dan lainnya—Loka-Loka hadir sebagai
                jembatan antara penyelenggara acara dan para pencari pengalaman.
                Dirancang dengan pendekatan modern dan ringan, saya berharap
                Loka-Loka bisa menjadi ruang digital yang bermanfaat dan
                inklusif bagi siapa pun yang ingin terlibat dalam dunia event.
              </Text>
              <Text className="my-2 text-center text-lg font-bold">
                © 2025 Loka-Loka. Built by Mulia Andiki.
              </Text>
            </Container>
          </Container>
        </ProfileLayout>
      )}
    </Container>
  );
};

export default TentangKamiChildren;
