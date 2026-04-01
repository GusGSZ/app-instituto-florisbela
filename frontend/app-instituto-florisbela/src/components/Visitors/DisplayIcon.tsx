import React from "react";
import { cn } from "@/lib/utils";

const BG_BY_COLOR = {
  emerald: "bg-emerald-100",
  "slate-300": "bg-slate-300 text-slate-300",
  "red-200": "bg-red-200 text-red-200",
} as const;

export type DisplayIconColor = keyof typeof BG_BY_COLOR;

interface DisplayIconProps {
  color: DisplayIconColor;
  icon: React.ReactNode;
}

function DisplayIcon({ color, icon }: DisplayIconProps) {
  return (
    <div
      className={cn(
        "flex min-h-12 min-w-12 items-center justify-center rounded-full",
        BG_BY_COLOR[color],
      )}
    >
      {icon}
    </div>
  );
}

export default DisplayIcon;
