import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { formRegisterSchema } from "@/app/types/form";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";

export const useRegister = () => {
  const router = useRouter();
  const alert = useAlert();

  return useMutation<TResponse<any>, Error, formRegisterSchema>({
    mutationFn: registerUser,
    onSuccess: (res) => {
      alert.toast({
        title: "Berhasil Daftar",
        message: "Berhasil",
        icon: "success",
        onVoid: () => {
          router.push("/auth/login");
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
