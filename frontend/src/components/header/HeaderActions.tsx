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
  /* =========================
     MOBILE
  ========================= */
  if (mobile) {
    return (
      <div className="flex flex-col gap-3">
        {/* COMEÇAR */}
        <Link
          to="/criar-conta"
          onClick={onClick}
          className="group flex w-full items-center justify-center gap-2 rounded-full border border-blue-200/60 bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98]"
        >
          <span>Começar</span>

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* ENTRAR */}
        <Link
          to="/entrar"
          onClick={onClick}
          className="flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/60 px-5 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98]"
        >
          Entrar
        </Link>
      </div>
    );
  }

  /* =========================
     DESKTOP
  ========================= */
  return (
    <div className="flex items-center">
<Link
  to="/criar-conta"
  className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-blue-200/60 bg-blue-600/90 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0"
>
  {/* brilho suave */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

  {/* brilho animado */}
  <span className="pointer-events-none absolute inset-y-0 -left-full z-0 w-1/3 rotate-12 bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

  {/* TEXTO */}
  <span className="relative z-10 font-bold tracking-tight text-white">
    Começar
  </span>

  {/* ÍCONE */}
  <ArrowUpRight
    size={16}
    strokeWidth={2.5}
    className="relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  />
</Link>
    </div>
  );
}