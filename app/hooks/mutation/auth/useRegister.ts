import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { formRegisterSchema } from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { RouteConfigLogic } from "@/app/config/route.config";
import { useAppDispatch } from "../../dispatch/dispatch";
import { setEmail } from "@/app/stores/OtpSlice/otpSlice";
export const useRegister = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();

  type ReegisterRespon = {
    register: TResponse<any>;
    otp: TResponse<any>;
  };

  return useMutation<ReegisterRespon, Error, formRegisterSchema>({
    mutationFn: async (registerPayload) => {
      const resRegister = await AuthApi.registerUser(registerPayload);
      const resOtp = await AuthApi.sendOtp({ email: registerPayload.email });
      return {
        register: resRegister,
        otp: resOtp,
      };
    },
    onSuccess: (res, variables) => {
      dispatch(setEmail(variables.email));
      alert.toast({
        title: "Berhasil Daftar",
        message: "Berhasil",
        icon: "success",
        onVoid: () => {
          router.push(RouteConfigLogic.regiter.href);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal Mendaftar",
        icon: "error",
        message: "Gagal",
      });
    },
  });
};
