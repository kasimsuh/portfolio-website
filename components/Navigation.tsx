"use client";

import {
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  User,
} from "lucide-react";

import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Navigation() {
  const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Projects", url: "#projects", icon: FolderKanban },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
