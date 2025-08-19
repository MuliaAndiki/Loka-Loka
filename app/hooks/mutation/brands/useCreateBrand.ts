import BrandApi from '@/app/service/auth/brand.service';
import { useMutation } from '@tanstack/react-query';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { useAlert } from '../../alert/costum-alert';
import { useRouter } from 'next/navigation';
import { RouteConfigLogic } from '@/app/config/route.config';
import { resetForm } from '@/app/stores/BrandSlice/brandSlice';
import { useAppDispatch } from '../../dispatch/dispatch';

export const useCreateBrand = () => {
  const alert = useAlert();
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation<TResponse<any>, Error, FormData>({
    mutationFn: BrandApi.createBrand,
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil',
        message: 'Mohon Tunngu Persetujuan Admin Daerah Anda',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.createBrand.href);
          dispatch(resetForm());
        },
      });
    },
    onError: (err) => {
      console.log(err);
      alert.toast({
        title: 'Gagal',
        message: 'Mohon Coba Sebentar Lagi',
        icon: 'error',
      });
    },
  });
};
