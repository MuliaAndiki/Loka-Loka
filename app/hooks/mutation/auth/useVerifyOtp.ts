import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { formVerifyOtpSchema } from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { RouteConfigLogic } from "@/app/config/route.config";
import { useAppDispatch, useAppSelector } from "../../dispatch/dispatch";
import { clearOtp } from "@/app/stores/OtpSlice/otpSlice";
import { persistor } from "@/app/stores/store";

export const useVerifyOtp = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();
  const source = useAppSelector((state) => state.otp.source);

  return useMutation<TResponse<any>, Error, formVerifyOtpSchema>({
    mutationFn: AuthApi.verifyOtp,
    onSuccess: (res) => {
      alert.toast({
        title: "Berhasil",
        message: "Berhasil Verifikasi OTP",
        icon: "success",
        onVoid: () => {
          if (source === "register") {
            router.push(RouteConfigLogic.verifyOtp.href);
            dispatch(clearOtp());
          } else if (source === "forgotPasswordByEmail") {
            router.push(RouteConfigLogic.prevResetPasswordByEmail.href);
          } else if (source === "forgotPasswordByPhoneNumber") {
            router.push(RouteConfigLogic.prevResetPasswordByPhoneNumber.href);
          } else {
            router.push("/");
          }
          persistor.purge();
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
