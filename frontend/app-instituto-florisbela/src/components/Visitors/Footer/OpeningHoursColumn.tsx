import React from "react";

function OpeningHoursColumn() {
  return (
    <div>
      <h3 className="font-bold font-poppins text-blue-primary text-lg mb-6 mt-4">
        Horário de Funcionamento
      </h3>

      <ul className="space-y-4 font-nunito text-theme-gray-light">
        <li className="flex items-center justify-between gap-2 text-sm">
          <span>Segunda a Sexta</span>
          <span>07:00 - 18:00</span>
        </li>
        <hr className="border-t border-gray-300" />
        <li className="flex items-center justify-between gap-2 text-sm">
          <span>Sábado, Domingo e Feriados</span>
          <span className="text-red-primary">Fechado</span>
        </li>
      </ul>
    </div>
  );
}

export default OpeningHoursColumn;
