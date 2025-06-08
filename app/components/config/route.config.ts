import { RouteConfig } from "../types/config";

export const RouteConfigStatic: RouteConfig[] = [
  {
    login: {
      title: "Login",
      href: "/auth/login",
    },
    register: {
      title: "Daftar Sekarang!",
      href: "/auth/register",
    },
    facebook: {
      href: "/",
    },
    google: {
      href: "/",
    },
  },
];
