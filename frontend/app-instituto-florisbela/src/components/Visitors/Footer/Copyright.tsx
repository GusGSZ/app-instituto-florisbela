import Link from "next/link";

function Copyright() {
  const year = new Date().getFullYear();

  return (
    <div className="col-span-4 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-theme-gray-light">
        © {year} Instituto Florisbela. Todos os direitos reservados.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-theme-gray-light">
        <Link
          href="/politica-de-privacidade"
          className="hover:text-red-primary transition-colors"
        >
          Política de Privacidade
        </Link>
        <Link
          href="/termos-de-uso"
          className="hover:text-red-primary transition-colors"
        >
          Termos de Uso
        </Link>
      </div>
    </div>
  );
}

export default Copyright;
