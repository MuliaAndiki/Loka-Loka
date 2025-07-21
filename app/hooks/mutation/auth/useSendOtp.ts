import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useAlert } from "../../alert/costum-alert";
import { useAppSelector } from "../../dispatch/dispatch";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { formSendOtpEmail } from "@/app/types/form";
import { formSendOtpPhoneNumber } from "@/app/types/form";

type SendOtpPayload = formSendOtpEmail | formSendOtpPhoneNumber;

export const useSendOtp = () => {
  const alert = useAlert();
  const source = useAppSelector((state) => state.otp.source);

  return useMutation<TResponse<any>, Error, SendOtpPayload>({
    mutationFn: async (res) => {
      if (source === "register") {
        if (!("email" in res)) throw new Error("Email is required");
        return await AuthApi.sendOtpRegister({ email: res.email });
      } else if (source === "forgotPasswordByEmail") {
        if (!("email" in res)) throw new Error("Email is required");
        return await AuthApi.forgotPasswordByEmail({ email: res.email });
      } else if (source === "forgotPasswordByPhoneNumber") {
        if (!("phoneNumber" in res)) throw new Error("PhoneNumber is requid");
        return await AuthApi.forgotPasswordByPhoneNumber({
          phoneNumber: res.phoneNumber,
        });
      } else {
        throw new Error("Sumber Otp tidak dikenali");
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
