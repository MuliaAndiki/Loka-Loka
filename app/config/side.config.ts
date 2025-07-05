import { SidebarProps, DropdownProps } from "../types/ui";
import {
  Activity,
  SquareUserRound,
  History,
  CircleX,
  Settings,
} from "lucide-react";

export const SidebarItems: SidebarProps[] = [
  {
    title: "Profile",
    href: "#",
    icon: SquareUserRound,
  },
  {
    title: "Events",
    href: "#",
    icon: Activity,
  },
  {
    title: "Riwayat",
    href: "#",
    icon: History,
  },
];

export const DropdownItems: DropdownProps[] = [
  {
    Keluar: {
      title: "Keluar",
      href: "/splash",
    },
    Pengaturan: {
      title: "Pengaturan",
      href: "#",
    },
  },
];
