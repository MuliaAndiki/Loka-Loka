import {
  RouteStaticConfig,
  RouteLogicConfig,
  RouteProfileAppConfig,
  RouteChartConfig,
} from "../types/config";
import {
  UserPen,
  Calendar,
  ChevronRight,
  CreditCard,
  MapPin,
  Warehouse,
  Bookmark,
} from "lucide-react";
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
    title: "Riwayat Pesanan",
    href: "#",
    iconV1: Calendar,
    iconV2: ChevronRight,
  },
  {
    title: "Metode Pembayaran",
    href: "#",
    iconV1: CreditCard,
    iconV2: ChevronRight,
  },
  {
    title: "Alamat Saya",
    href: "#",
    iconV1: MapPin,
    iconV2: ChevronRight,
  },
  {
    title: "Disimpan",
    href: "#",
    iconV1: Bookmark,
    iconV2: ChevronRight,
  },
  {
    title: "Tentang Kami",
    href: "#",
    iconV1: Warehouse,
    iconV2: ChevronRight,
  },
];

export const RouteChartApp: RouteChartConfig[] = [
  {
    title: "Biling",
    href: "#",
  },
];
