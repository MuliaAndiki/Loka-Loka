import AuthApi from '@/app/service/auth/auth.service';
import { useRouter } from 'next/navigation';
import { useAlert } from '../../alert/costum-alert';
import { useMutation } from '@tanstack/react-query';
import { TResponse } from '@/app/pkg/react-query/mutation-wrapper.type';
import { formSendOtpPhoneNumber } from '@/app/types/form';
import { setEmail, setPhoneNumber, setSource } from '@/app/stores/OtpSlice/otpSlice';
import { useAppDispatch } from '../../dispatch/dispatch';
import { RouteConfigLogic } from '@/app/config/route.config';
export const useForgotPasswordByPhoneNumber = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();

  return useMutation<TResponse<any>, Error, formSendOtpPhoneNumber>({
    mutationFn: AuthApi.forgotPasswordByPhoneNumber,
    onSuccess: (res, variables) => {
      dispatch(setSource('forgotPasswordByPhoneNumber'));
      dispatch(setPhoneNumber(variables.phoneNumber));
      alert.toast({
        title: 'Berhasil',
        message: 'Nomor Hp Kamu Terverifikasi',
        icon: 'success',
        onVoid: () => {
          router.push(RouteConfigLogic.forgotByPhoneNumber.href);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: 'Gagal',
        message: 'Nomor Hp Anda Tidak Terverifikasi',
        icon: 'error',
      });
    },
  });
};
