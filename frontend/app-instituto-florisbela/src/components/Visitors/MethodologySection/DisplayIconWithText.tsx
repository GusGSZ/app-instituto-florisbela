import React from "react";
import DisplayIcon, { DisplayIconColor } from "../DisplayIcon";

interface DisplayIconWithTextProps {
  icon: React.ReactNode;
  color: DisplayIconColor;
  title: string;
  description: string;
  className?: string;
}

function DisplayIconWithText({
  icon,
  color,
  title,
  description,
  className,
}: DisplayIconWithTextProps) {
  return (
    <div className={`flex items-start justify-start gap-x-4 ${className}`}>
      <DisplayIcon icon={icon} color={color} />
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-blue-primary font-poppins">
          {title}
        </h3>
        <p className="text-theme-gray-light mt-1">{description}</p>
      </div>
    </div>
  );
}

export default DisplayIconWithText;
