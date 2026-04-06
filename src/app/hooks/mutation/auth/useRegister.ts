import { useMutation } from '@tanstack/react-query';
import AuthApi from '@/app/service/auth/auth.service';
import { useRouter } from 'next/navigation';
import { useAlert } from '../../alert/costum-alert';
import { formRegisterSchema } from '@/app/types/form';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { RouteConfigLogic } from '@/app/config/route.config';
import { useAppDispatch } from '../../dispatch/dispatch';
import { setEmail, setSource } from '@/app/stores/OtpSlice/otpSlice';
export const useRegister = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();

  return useMutation<TResponse<any>, Error, formRegisterSchema>({
    mutationFn: AuthApi.registerUser,
    onSuccess: (res, variables) => {
      dispatch(setEmail(variables.email));
      dispatch(setSource('register'));
      alert.toast({
        title: 'Berhasil Daftar',
        message: 'Berhasil',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.regiter.href);
        },
      });
    },
    onError: (err) => {
      console.log(err);
      alert.toast({
        title: 'Gagal Mendaftar',
        icon: 'error',
        message: 'Gagal',
      });
    },
  });
};
