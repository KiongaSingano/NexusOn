import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderActionsProps {
  mobile?: boolean;
  onClick?: () => void;
}

export default function HeaderActions({
  mobile = false,
  onClick,
}: HeaderActionsProps) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-3">
        {/* Entrar */}
        <Link
          to="/entrar"
          onClick={onClick}
          className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Entrar
        </Link>

        {/* Criar conta */}
        <Link
          to="/criar-conta"
          onClick={onClick}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Criar conta
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Entrar */}
      <Link
        to="/entrar"
        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Entrar
      </Link>

      {/* Criar conta */}
      <Link
        to="/criar-conta"
        className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
      >
        Criar conta
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}