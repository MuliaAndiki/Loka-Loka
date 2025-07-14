import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { formRegisterSchema } from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { RouteConfigLogic } from "@/app/config/route.config";
export const useRegister = () => {
  const router = useRouter();
  const alert = useAlert();

  return useMutation<TResponse<any>, Error, formRegisterSchema>({
    mutationFn: AuthApi.registerUser,
    onSuccess: (res) => {
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
