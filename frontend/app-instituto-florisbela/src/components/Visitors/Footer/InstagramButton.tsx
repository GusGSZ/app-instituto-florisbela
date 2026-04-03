"use client";

import clsx from "clsx";
import { Focus } from "lucide-react";

function InstagramButton() {
  return (
    <div
      className={clsx(
        "w-10 h-10 rounded-full shadow-sm flex items-center justify-center cursor-pointer",
        "bg-light-green text-blue-primary hover:bg-red-primary hover:text-white",
      )}
      onClick={() => {
        window.open("https://www.instagram.com/i.e.florisbelaofc/");
      }}
    >
      <Focus width={20} height={20} />
    </div>
  );
}

export default InstagramButton;
