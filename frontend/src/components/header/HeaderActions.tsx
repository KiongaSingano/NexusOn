import { ArrowRight } from "lucide-react";

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
        <a
          href="#entrar"
          onClick={onClick}
          className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Entrar
        </a>

        <a
          href="#criar-conta"
          onClick={onClick}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Criar conta
          <ArrowRight size={17} />
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href="#entrar"
        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Entrar
      </a>

      <a
        href="#criar-conta"
        className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
      >
        Criar conta

        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}