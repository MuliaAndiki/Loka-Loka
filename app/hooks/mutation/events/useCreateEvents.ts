import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { formCreateEventsSchema } from '@/app/types/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import EventsApi from '@/app/service/events/events.service';
import { useAlert } from '../../alert/costum-alert';
import { useRouter } from 'next/navigation';
import { RouteConfigLogic } from '@/app/config/route.config';

export const useCreateEvents = (id: string) => {
  const alert = useAlert();
  const router = useRouter();
  // Nanti Setup
  const queryClinet = useQueryClient();
  return useMutation<TResponse<any>, Error, formCreateEventsSchema>({
    mutationFn: (payload: formCreateEventsSchema) => EventsApi.createEvents(id, payload),
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil',
        message: 'Berhasil Membuat Events',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.login.organizer);
        },
      });
    },
    onError: (err) => {
      console.log(err);
      alert.toast({
        title: 'Gagal',
        message: 'Gagal Membuat Events',
        icon: 'error',
      });
    },
  });
};
