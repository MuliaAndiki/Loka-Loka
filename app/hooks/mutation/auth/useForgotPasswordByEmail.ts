import AuthApi from '@/app/service/auth/auth.service';
import { useRouter } from 'next/navigation';
import { useAlert } from '../../alert/costum-alert';
import { useMutation } from '@tanstack/react-query';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { formSendOtpEmail } from '@/app/types/form';
import { setEmail, setSource } from '@/app/stores/OtpSlice/otpSlice';
import { useAppDispatch } from '../../dispatch/dispatch';
import { RouteConfigLogic } from '@/app/config/route.config';
export const useForgotPasswordByEmail = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();

  return useMutation<TResponse<any>, Error, formSendOtpEmail>({
    mutationFn: AuthApi.forgotPasswordByEmail,
    onSuccess: (res, variables) => {
      dispatch(setSource('forgotPasswordByEmail'));
      dispatch(setEmail(variables.email));
      alert.toast({
        title: 'Berhasil',
        message: 'Email Kamu Terverifikasi',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.forgotByEmail.href);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: 'Gagal',
        message: 'Email Anda Tidak Terdaftar',
        icon: 'error',
      });
    },
  });
};
