import Image from "next/image";
import InstagramButton from "./InstagramButton";

function SchoolColumn() {
  return (
    <div className="space-y-6 -mt-3">
      <div className="flex flex-row items-center font-poppins">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="-ml-4 w-20 h-20"
        />
        <span className="text-xl text-blue-primary ml-2 font-bold">
          Instituto
        </span>
        <span className="text-xl text-red-primary font-bold">Florisbela</span>
      </div>

      <p className="text-sm leading-relaxed text-theme-gray-light">
        Educando com amor, respeito e inovação para formar cidadãos felizes e
        preparados para o futuro.
      </p>

      <InstagramButton />
    </div>
  );
}

export default SchoolColumn;
