"use client";

import { cn } from "@/lib/utils";

import { BackgroundPathsBackdrop } from "@/components/ui/background-paths";

interface BackgroundPathsLayerProps {
  className?: string;
}

export function BackgroundPathsLayer({ className }: BackgroundPathsLayerProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none inset-0", className)}>
      <BackgroundPathsBackdrop />
    </div>
  );
}
