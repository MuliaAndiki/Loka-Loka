import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useAlert } from "../../alert/costum-alert";
import { useAppSelector } from "../../dispatch/dispatch";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { formSendOtpSchema } from "@/app/types/form";

export const useSendOtp = () => {
  const alert = useAlert();
  const source = useAppSelector((state) => state.otp.source);

  return useMutation<TResponse<any>, Error, formSendOtpSchema>({
    mutationFn: async (res) => {
      if (source === "register") {
        return await AuthApi.sendOtpRegister(res);
      } else if (source === "forgotPasswordByEmail") {
        return await AuthApi.forgotPassword(res);
      } else {
        throw new Error("Sumber OTP tidak dikenali");
      }
    },

    onSuccess: () => {
      alert.toast({
        title: "Berhasil",
        message: "Berhasil Mengirim Otp",
        icon: "success",
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal",
        message: "Gagal Mengirim Otp",
        icon: "error",
      });
    },
  });
};
