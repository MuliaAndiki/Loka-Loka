import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { formResetPasswordSchema } from "@/app/types/form";
import { RouteConfigLogic } from "@/app/config/route.config";

export const useResetPassword = () => {
  const router = useRouter();
  const alert = useAlert();

  return useMutation<TResponse<any>, Error, formResetPasswordSchema>({
    mutationFn: AuthApi.resetPassword,
    onSuccess: (res) => {
      alert.toast({
        title: "Berhasil",
        message: "Berhasil Reset Password Anda",
        icon: "success",
        onVoid: () => {
          router.push(RouteConfigLogic.resetPassowrd.href);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal",
        message: "Gagal Melakukan Reset Kata Sandi",
        icon: "error",
      });
    },
  });
};
