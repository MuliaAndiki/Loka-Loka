import Container from '@/app/ui/container';
import { useQueryClient } from '@tanstack/react-query';
import { Text } from '@/app/ui/Text';
import Link from 'next/link';
import Fallback from '@/app/ui/fallback';
import { RouteProfileApp } from '@/app/config/route.config';
import { AlertContexType } from '@/app/types/ui';

type initialProps = {
  alert: AlertContexType;
};

const ProfileRoute = ({ alert }: initialProps) => {
  const routes = RouteProfileApp();
  const queryClient = useQueryClient();

  return (
    <Container
      as="section"
      className="px-2 flex w-full h-full justify-center flex-col items-center "
    >
      {routes.map((items, key) => (
        <Container key={key} className="w-full">
          {items.href ? (
            <Link
              key={key}
              href={items.href}
              className="w-full flex justify-between items-center my-2 border-b-2 border-[var(--shapeV1-child)] p-2"
            >
              <Container className="flex  gap-2 items-center justify-center">
                <items.iconV1 />
                <Text className="md:text-4xl text-lg font-semibold ">{items.title}</Text>
              </Container>

              <items.iconV2 />
            </Link>
          ) : (
            <Container className="w-full flex justify-between items-center  border-b-2 border-[var(--shapeV1-child)] p-2 text-red-500">
              <items.iconV1 />
              <button
                onClick={() =>
                  alert.modal({
                    title: 'Keluar',
                    deskripsi: 'Apakah Anda Yakin Ingin Keluar',
                    icon: 'question',
                    onConfirm: () => {
                      items.onClick?.();
                      queryClient.removeQueries();
                    },
                  })
                }
                className="flex items-center gap-2 p-2 w-full text-left cursor-pointer "
                disabled={items.isPending}
              >
                <Text className=" text-red-500 md:text-4xl text-lg font-semibold ">
                  {items.isPending ? (
                    <Fallback title="Tunggu Sebentar" className="text-red-500" />
                  ) : (
                    items.title
                  )}
                </Text>
              </button>
            </Container>
          )}
        </Container>
      ))}
    </Container>
  );
};

export default ProfileRoute;
