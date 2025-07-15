import { useMutation } from "@tanstack/react-query";
import AuthApi from "@/app/service/auth/auth.service";
import { useRouter } from "next/navigation";
import { useAlert } from "../../alert/costum-alert";
import { TResponse } from "@/app/pkg/react-query/mutation-wrapper.type";
import { formEditProfileSchema } from "@/app/types/form";
import { RouteConfigLogic } from "@/app/config/route.config";
import { useAppDispatch, useAppSelector } from "../../dispatch/dispatch";
import { setCurrentUser } from "@/app/stores/AuthSlice/authSlice";

export const useEditProfile = () => {
  const router = useRouter();
  const alert = useAlert();
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.auth.currentUser);
  return useMutation<TResponse<any>, Error, formEditProfileSchema>({
    mutationFn: AuthApi.editProfile,
    onSuccess: (res) => {
      dispatch(
        setCurrentUser({
          ...current,
          ...res.data,
        })
      );
      alert.toast({
        title: "Berhasil Edit",
        message: "Profile Anda Sudah Berubah",
        icon: "success",
        onVoid: () => {
          router.push(RouteConfigLogic.editProfile.href);
          setTimeout(() => {
            router.refresh();
          }, 1500);
        },
      });
    },
    onError: () => {
      alert.toast({
        title: "Gagal Edit Profile",
        message: "Mohon Coba Lagi",
        icon: "error",
      });
    },
  });
};
