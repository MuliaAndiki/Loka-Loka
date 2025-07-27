import BrandApi from '@/app/service/auth/brand.service';
import { useMutation } from '@tanstack/react-query';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { useAlert } from '../../alert/costum-alert';
import { formBikinBrandSchema } from '@/app/types/form';
import { useRouter } from 'next/navigation';
import { RouteConfigLogic } from '@/app/config/route.config';

export const useCreateBrand = () => {
  const alert = useAlert();
  const router = useRouter();

  return useMutation<TResponse<any>, Error, formBikinBrandSchema>({
    mutationFn: BrandApi.createBrand,
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil',
        message: 'Mohon Tunngu Persetujuan Admin Daerah Anda',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.createBrand.href);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: 'Gagal',
        message: 'Mohon Coba Sebentar Lagi',
        icon: 'error',
      });
    },
  });
};
