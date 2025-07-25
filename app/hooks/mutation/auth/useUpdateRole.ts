import BrandApi from "@/app/service/auth/brand.service";
import { useMutation } from "@tanstack/react-query";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { useAlert } from "../../alert/costum-alert";
import { formUpdateRoleSchema } from "@/app/types/form";
import { useRouter } from "next/navigation";

export const useUpdateRole = () => {
  const alert = useAlert();
  const router = useRouter();

  return useMutation<TResponse<any>, Error, formUpdateRoleSchema>({
    mutationFn: BrandApi.createBrand,
    onSuccess: (res) => {
      alert.toast({
        title: "Berhasil",
        message: "Selamat Tinggal Menunggu Feed Back Dari Admin",
        icon: "success",
        onVoid: () => {
          router.push("#");
        },
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal",
        message: "Mohon Coba Lagi Sebentar Lagi!",
        icon: "error",
      });
    },
  });
};
