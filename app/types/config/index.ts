import { any } from "zod";

export interface RouteStaticConfig {
  login: {
    title: string;
    href: string;
  };
  register: {
    title: string;
    href: string;
  };
  lupaKataSandi: {
    title: string;
    href: string;
  };
  metodeLain: {
    title: string;
    href: string;
  };
  lihatSemuaRekomendasi: {
    title: string;
    href: string;
  };
  lihatSemuaTerdekat: {
    title: string;
    href: string;
  };
  profile: {
    title: string;
    href: string;
  };
  editProfile: {
    title: any;
    href: string;
  };
}

export interface RouteLogicConfig {
  login: {
    href: string;
  };
}
