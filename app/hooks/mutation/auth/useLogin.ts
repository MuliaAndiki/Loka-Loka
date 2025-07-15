import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { formLoginSchema } from "@/app/types/form";
import { useAlert } from "../../alert/costum-alert";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { useAppDispatch } from "../../dispatch/dispatch";
import { setCurrentUser } from "@/app/stores/AuthSlice/authSlice";
import { userSchema } from "@/app/types/api";
export const useLogin = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();

  return useMutation<TResponse<any>, Error, formLoginSchema>({
    mutationFn: AuthApi.loginUser,
    onSuccess: (res) => {
      const userPayload: userSchema = {
        user: res.data.isAuthExist,
        token: res.data.token,
      };

      dispatch(setCurrentUser(userPayload));
      alert.toast({
        title: "Berhasil Login",
        message: "Selamat Datang Di Loka-Loka",
        icon: "success",
        onVoid: () => {
        },
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal Melakuakan Login",
        message: "Mohon Periksa Kembali",
        icon: "error",
      });
    },
  });
};
