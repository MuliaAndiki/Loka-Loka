import {
  RouteStaticConfig,
  RouteLogicConfig,
  RouteProfileAppConfig,
  RouteChartConfig,
} from '../types/config';

import {
  UserPen,
  Calendar,
  ChevronRight,
  CreditCard,
  MapPin,
  Warehouse,
  Bookmark,
  LogOut,
} from 'lucide-react';

import { useLogout } from '../hooks/mutation/auth/useLogout';
export const RouteConfigStatic: RouteStaticConfig[] = [
  {
    login: {
      title: 'Masuk Sekarang!',
      href: '/login',
    },
    register: {
      title: 'Daftar Sekarang!',
      href: '/register',
    },
    lupaKataSandi: {
      href: '/lupa-kata-sandi',
      title: 'Lupa Kata Sandi?',
    },
    metodeLain: {
      href: '/lupa-kata-sandi/metode-lain',
      title: 'Coba menggunakan cara lain ?',
    },
    lihatSemuaRekomendasi: {
      title: 'Lihat Semua',
      href: '#',
    },
    lihatSemuaTerdekat: {
      title: 'Lihat Semua',
      href: '#',
    },
    profile: {
      href: '/user/profile',
      title: 'Profile',
    },
    editProfile: {
      title: UserPen,
      href: '/user/profile/edit-profile',
    },
    daftarBrand: {
      title: 'Daftarkan Brand Anda?',
      href: '/user/buat-brand',
      secoundTitle: 'Bikin Brand?',
    },
  },
];

export const RouteConfigLogic: RouteLogicConfig = {
  login: {
    href: '/user/home',
  },
  logout: {
    href: '/login',
  },
  regiter: {
    href: '/verify-otp',
  },
  editProfile: {
    href: '/user/profile',
  },
  verifyOtp: {
    href: '/login',
  },
  forgotByEmail: {
    href: '/verify-otp',
  },
  forgotByPhoneNumber: {
    href: '/verify-otp',
  },
  prevResetPasswordByEmail: {
    href: 'lupa-kata-sandi/pemulihan-kata-sandi',
  },
  prevResetPasswordByPhoneNumber: {
    href: 'lupa-kata-sandi/pemulihan-kata-sandi',
  },
  resetPassword: {
    href: '/login',
  },
  createBrand: {
    href: '/user/home',
  },
};

export const RouteProfileApp = () => {
  const { mutate: logout, isPending } = useLogout();
  const handleLogout = () => logout();

  const Routes: RouteProfileAppConfig[] = [
    {
      title: 'Riwayat Pesanan',
      href: '#',
      iconV1: Calendar,
      iconV2: ChevronRight,
    },
    {
      title: 'Metode Pembayaran',
      href: '/user/profile/metode-pembayaran',
      iconV1: CreditCard,
      iconV2: ChevronRight,
    },
    {
      title: 'Alamat Saya',
      href: '#',
      iconV1: MapPin,
      iconV2: ChevronRight,
    },
    {
      title: 'Disimpan',
      href: '#',
      iconV1: Bookmark,
      iconV2: ChevronRight,
    },
    {
      title: 'Tentang Kami',
      href: '/user/profile/tentang-kami',
      iconV1: Warehouse,
      iconV2: ChevronRight,
    },
    {
      title: 'Keluar',
      iconV1: LogOut,
      iconV2: ChevronRight,
      onClick: handleLogout,
      isPending: isPending,
    },
  ];
  return Routes;
};

export const RouteChartApp: RouteChartConfig[] = [
  {
    title: 'Biling',
    href: '#',
  },
];
