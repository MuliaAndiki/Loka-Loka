import {
  RouteStaticConfig,
  RouteLogicConfig,
  RouteProfileAppConfig,
} from "../types/config";
import { UserPen, Calendar, ChevronRight, CreditCard } from "lucide-react";
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

export const RouteProfileApp: RouteProfileAppConfig[] = [
  {
    title: "Order History",
    href: "/",
    iconV1: Calendar,
    iconV2: ChevronRight,
  },
  {
    title: "Payment Me",
    href: "/",
    iconV1: CreditCard,
    iconV2: ChevronRight,
  },
];
