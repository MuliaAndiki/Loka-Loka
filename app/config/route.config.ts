import { RouteStaticConfig, RouteLogicConfig } from "../types/config";

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
    lihatSemua: {
      title: "Lihat Semua",
      href: "#",
    },
  },
];

export const RouteConfigLogic: RouteLogicConfig = {
  login: {
    href: "/home",
  },
};
