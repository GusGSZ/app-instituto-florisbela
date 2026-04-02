import Link from "next/link";

function LinksColumn() {
  return (
    <div className="space-y-4">
      <h3 className="font-bold font-poppins text-blue-primary text-lg mb-6 mt-4">
        Links Úteis
      </h3>
      <ul className="space-y-4 font-nunito text-theme-gray-light text-sm">
        <li>
          <Link
            href="/methodology"
            className="hover:text-red-primary transition-colors duration-200"
          >
            Nossa Metodologia
          </Link>
        </li>
        <li>
          <Link
            href="/structure"
            className="hover:text-red-primary transition-colors duration-200"
          >
            Estrutura
          </Link>
        </li>
        <li>
          <Link
            href="/classes"
            className="hover:text-red-primary transition-colors duration-200"
          >
            Turmas e Mensalidades
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LinksColumn;
