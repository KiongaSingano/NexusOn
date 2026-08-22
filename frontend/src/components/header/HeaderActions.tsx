import { ArrowUpRight } from "lucide-react";
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
        <Link
          to="/criar-conta"
          onClick={onClick}
          className="group flex w-full items-center justify-center gap-2 rounded-full border border-blue-200/60 bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]"
        >
          Começar
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        <Link
          to="/entrar"
          onClick={onClick}
          className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/60 px-5 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          Entrar
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Link
        to="/criar-conta"
        className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/70 bg-white/50 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/80 hover:text-blue-600 hover:shadow-md active:translate-y-0"
      >
        <span className="relative z-10">Começar</span>

        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />

        {/* brilho */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </Link>
    </div>
  );
}