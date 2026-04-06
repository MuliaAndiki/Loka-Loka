import { Button } from '@/app/ui/button';
import Container from '@/app/ui/container';
import { Input } from '@/app/ui/input';
import Spreed from '@/app/ui/spreed';
import { Text } from '@/app/ui/Text';
import { ArrowDown, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { contact } from '@/app/core/constants/kontak-kami';
import Link from 'next/link';
import { Label } from '@radix-ui/react-label';

const TentangKamiKonten = () => {
  const [isState, setIState] = useState<'Tentang' | 'FAQ' | 'ContactUs'>('Tentang');
  const [isActive, setIsActive] = useState<number | null>(null);
  return (
    <Container
      as="section"
      className="w-full max-w-2xl mx-auto p-4 flex-col flex  justify-around mb-10"
    >
      <Container className="flex justify-around items-center ">
        <Button variant="outline" className="font-semibold" onClick={() => setIState('Tentang')}>
          Tentang Kami
        </Button>
        <Button variant="outline" className="font-semibold" onClick={() => setIState('FAQ')}>
          FAQ
        </Button>
        <Button variant="outline" className="font-semibold" onClick={() => setIState('ContactUs')}>
          Kontak Kami
        </Button>
      </Container>
      {isState === 'Tentang' && (
        <Container className="flex flex-col justify-center">
          <Spreed className="my-2" orientation="horizontal" />
          <Text className="font-semibold whitespace-pre-line text-xl ">Tentang Kami :</Text>
          <Text className="text-justify text-md my-2">
            Loka-Loka adalah platform event yang saya, Mulia Andiki, kembangkan secara mandiri untuk
            memudahkan siapa pun menemukan dan mengikuti berbagai acara menarik—mulai dari Festival,
            Konser, Workshop, Seminar, hingga Komunitas, Teknologi, dan Acara Jejepangan. Dengan
            dukungan kategori beragam seperti Pameran, Kompetisi, Kuliner, Olahraga, Nonton Bareng,
            hingga Kegiatan Sosial, Keagamaan, dan lainnya—Loka-Loka hadir sebagai jembatan antara
            penyelenggara acara dan para pencari pengalaman. Dirancang dengan pendekatan modern dan
            ringan, saya berharap Loka-Loka bisa menjadi ruang digital yang bermanfaat dan inklusif
            bagi siapa pun yang ingin terlibat dalam dunia event.
          </Text>
          <Spreed className="my-2" orientation="horizontal" />
          <Text className="my-2 text-center text-sm font-bold">
            © 2025 Loka-Loka. Built by Mulia Andiki.
          </Text>
        </Container>
      )}
      {isState === 'FAQ' && (
        <Container className="flex flex-col justify-center">
          <Container className="my-2">
            <Spreed orientation="horizontal" className="my-2" />
            <Container className="flex justify-between items-center gap-2">
              <Input placeholder="searching" />
              <SlidersHorizontal />
            </Container>
            <Spreed orientation="horizontal" className="my-2" />
          </Container>
          <Text className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quam non natus
            reiciendis pariatur quae quidem? Quasi facilis accusamus animi reprehenderit distinctio,
            dolorem harum id nostrum odit cum ad suscipit?
          </Text>
          <Spreed orientation="horizontal" className="my-2" />
          <Container className="flex justify-between items-center">
            <Text className="font-semibold">Lorem ipsum amet consectetur adipisicing elit.</Text>

            <ArrowRight />
          </Container>
        </Container>
      )}
      {isState === 'ContactUs' && (
        <Container className="flex flex-col justify-center items-center">
          <Spreed className="my-2" orientation="horizontal" />
          <Container className="flex justify-between items-center flex-col w-full">
            {contact.map((items) => (
              <Container key={items.id} className="w-full my-1">
                <Container
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsActive(isActive === items.id ? null : items.id)}
                >
                  <Container className="flex justify-center items-center gap-2">
                    <items.icon className="size-10 text-[var(--shapeV1-parent)]" />
                    <Text className="text-lg font-semibold">{items.title}</Text>
                  </Container>

                  {isActive === items.id ? (
                    <ArrowDown className="text-[var(--shapeV1-parent)]" />
                  ) : (
                    <ArrowRight className="text-[var(--shapeV1-parent)]" />
                  )}
                </Container>

                {isActive === items.id && (
                  <Container className="mt-2 p-2 rounded-lg bg-[var(--shapeV1-parent)]/10 transition-all duration-400">
                    {items.content.map((items) => (
                      <Link
                        href={items.value}
                        key={items.id}
                        className="flex justify-start items-start flex-col "
                      >
                        <Label className="text-sm font-bold text-[var(--shapeV1-parent)] my-1">
                          {items.label}
                        </Label>
                      </Link>
                    ))}
                  </Container>
                )}
              </Container>
            ))}
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default TentangKamiKonten;
