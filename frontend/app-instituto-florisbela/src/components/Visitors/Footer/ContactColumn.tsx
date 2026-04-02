import { Mail, MapPin, MessageCircleCheck, Phone } from "lucide-react";

function ContactColumn() {
  return (
    <div>
      <h3 className="font-bold font-poppins text-blue-primary text-lg mb-6 mt-4">
        Contato
      </h3>

      <ul className="space-y-4 font-nunito text-theme-gray-light">
        <li className="flex items-center gap-2 text-sm">
          <MapPin
            width={20}
            height={20}
            fill="currentColor"
            className="w-5 h-5 text-red-primary"
          />
          Av. Deputado Denio Moreira de Carvalho, 681 - Vereda - Ribeirão das
          Neves - MG
        </li>
        <li className="flex items-center gap-2 text-sm">
          <Phone
            width={20}
            height={20}
            fill="currentColor"
            strokeWidth={1}
            className="w-5 h-5 text-red-primary"
          />
          (31) 99703-9871
        </li>
        <li className="flex items-center gap-2 text-sm">
          <MessageCircleCheck
            width={20}
            height={20}
            className="w-5 h-5 text-red-primary"
          />
          (31) 99703-9871
        </li>
        <li className="flex items-center gap-2 text-sm">
          <Mail width={20} height={20} className="w-5 h-5 text-red-primary" />
          institutoflorisbela@gmail.com
        </li>
      </ul>
    </div>
  );
}

export default ContactColumn;
