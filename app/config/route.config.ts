import { RouteStaticConfig, RouteLogicConfig } from "../types/config";
import { UserPen } from "lucide-react";
export const RouteConfigStatic: RouteStaticConfig[] = [
  {
    login: {
      title: "Masuk Sekarang!",
      href: "/auth/login",
    },
    register: {
      title: "Daftar Sekarang!",
      href: "/auth/register",
    },
    lupaKataSandi: {
      href: "/auth/lupa-kata-sandi",
      title: "Lupa Kata Sandi?",
    },
    metodeLain: {
      href: "/auth/lupa-kata-sandi/metode-lain",
      title: "Coba menggunakan cara lain ?",
    },
    lihatSemuaRekomendasi: {
      title: "Lihat Semua",
      href: "#",
    },
    lihatSemuaTerdekat: {
      title: "Lihat Semua",
      href: "#",
    },
    profile: {
      href: "/profile",
      title: "Profile",
    },
    editProfile: {
      title: UserPen,
      href: "/profile/edit-profile",
    },
  },
];

export const RouteConfigLogic: RouteLogicConfig = {
  login: {
    href: "/home",
  },
};
