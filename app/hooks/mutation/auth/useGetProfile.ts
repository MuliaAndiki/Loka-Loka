import AuthApi from "@/app/service/auth/auth.service";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileById = () => {
  return useQuery({
    queryKey: ["users", "byId"],
    queryFn: AuthApi.getProfile,
    staleTime: 1000 * 60 * 5,
  });
};
