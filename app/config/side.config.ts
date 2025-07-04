import { SidebarProps } from "../types/ui";
import { Activity, SquareUserRound, History } from "lucide-react";

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
    title: "History",
    href: "#",
    icon: History,
  },
];
