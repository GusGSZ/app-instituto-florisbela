import Image from "next/image";

interface BounceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: string;
}

export function BounceCard({
  title,
  description,
  icon,
  position,
}: BounceCardProps) {
  return (
    <div
      className={`absolute ${position} bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce z-9999`}
    >
      <div>{icon}</div>
      <div>
        <p className="text-xs text-gray-light">{title}</p>
        <p className="text-sm font-semibold text-blue-primary">{description}</p>
      </div>
    </div>
  );
}
