import { Briefcase, Home, Mail, User } from "lucide-react";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function DemoBackgroundPaths() {
  return <BackgroundPaths title="Background Paths" />;
}

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return <NavBar items={navItems} />;
}
