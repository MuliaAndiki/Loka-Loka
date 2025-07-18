import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { formVerifyOtpSchema } from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { RouteConfigLogic } from "@/app/config/route.config";

export const useVerifyOtp = () => {
  const router = useRouter();
  const alert = useAlert();

  return useMutation<TResponse<any>, Error, formVerifyOtpSchema>({
    mutationFn: AuthApi.verifyOtp,
    onSuccess: (res) => {
      alert.toast({
        title: "Berhasil",
        message: "Berhasil Verifikasi OTP",
        icon: "success",
        onVoid: () => {
          router.push(RouteConfigLogic.verifyOtp.href);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal",
        message: "Gagal Verify Otp",
        icon: "error",
      });
    },
  });
};
