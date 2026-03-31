import clsx from "clsx";
import React from "react";

interface DifferentialCardProps {
  color: string;
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
  iconHoverBgColor: string;
  iconHoverColor: string;
}

function DifferentialCard({
  color,
  icon,
  bgColor,
  title,
  description,
  iconHoverBgColor,
  iconHoverColor,
}: DifferentialCardProps) {
  return (
    <div
      className={clsx(
        "group flex flex-col items-start text-left bg-light-green rounded-2xl p-6 max-w-70",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
      )}
    >
      <div
        className={clsx(
          "w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6",
          bgColor,
          color,
          iconHoverBgColor,
          iconHoverColor,
        )}
      >
        {icon}
      </div>
      <h3 className="text-blue-primary text-xl font-poppins font-bold mb-3">
        {title}
      </h3>
      <p className="text-theme-gray-light font-nunito leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default DifferentialCard;
