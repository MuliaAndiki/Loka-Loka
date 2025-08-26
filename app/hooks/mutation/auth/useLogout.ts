import AuthApi from '@/app/service/auth/auth.service';
import { useAlert } from '../../alert/costum-alert';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RouteConfigLogic } from '@/app/config/route.config';
import { persistor } from '@/app/stores/store';
import { useAppDispatch } from '../../dispatch/dispatch';
import { logout } from '@/app/stores/AuthSlice/authSlice';

export const useLogout = () => {
  const alert = useAlert();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation<TResponse<any>, Error>({
    mutationFn: AuthApi.logoutUser,
    onSuccess: (res) => {
      alert.toast({
        title: 'Berhasil Keluar',
        message: ' Berhasil',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.logout.href);
          dispatch(logout());
          persistor.purge();
          queryClient.removeQueries();
        },
      });
    },
    onError: (err) => {
      console.log(err);
      alert.toast({
        title: 'Gagal Keluar',
        message: 'Coba Sebentar Lagi',
        icon: 'error',
      });
    },
  });
};
