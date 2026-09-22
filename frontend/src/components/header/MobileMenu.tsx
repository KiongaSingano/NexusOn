import { ArrowUpRight, X } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Logo from "./Logo";
import HeaderActions from "./HeaderActions";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Início", to: "/" },
  { label: "Oportunidades", to: "/oportunidades" },
  { label: "Comunidades", to: "/comunidades" },
  { label: "Contactos", to: "/contactos" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // Voltar ao topo da página inicial
  const goHome = () => {
    onClose();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // Ir para a secção FAQ
  const goToFAQ = () => {
    onClose();

    if (location.pathname === "/") {
      window.setTimeout(() => {
        document.getElementById("faq")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

      return;
    }

    navigate("/");

    window.setTimeout(() => {
      document.getElementById("faq")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div
      className={`fixed inset-0 z-[200] lg:hidden ${
        open
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Fundo escuro */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar menu"
        className={`absolute inset-0 cursor-pointer bg-slate-950/40 backdrop-blur-md transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Menu */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(88%,390px)] flex-col overflow-y-auto border-l border-white/50 bg-white/95 px-5 pb-8 pt-5 shadow-2xl backdrop-blur-2xl transition-transform duration-200 sm:px-6 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu de navegação"
      >
        {/* Cabeçalho do menu */}
        <div className="flex items-center justify-between">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 shadow-sm transition-colors duration-150 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navegação */}
        <nav className="mt-8">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Navegação
          </p>

          <div className="space-y-1">
            {navItems.map((item) => {
              const active =
                item.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.to);

              // Início
              if (item.label === "Início") {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={goHome}
                    className={`group flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition-colors duration-150 ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    ) : (
                      <ArrowUpRight
                        size={16}
                        className="text-slate-300 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                      />
                    )}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={onClose}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors duration-150 ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  <span>{item.label}</span>

                  {active ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  ) : (
                    <ArrowUpRight
                      size={16}
                      className="text-slate-300 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                    />
                  )}
                </Link>
              );
            })}

            {/* FAQ */}
            <button
              type="button"
              onClick={goToFAQ}
              className="group flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-slate-700 transition-colors duration-150 hover:bg-slate-50 hover:text-blue-600"
            >
              <span>FAQ</span>

              <ArrowUpRight
                size={16}
                className="text-slate-300 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
              />
            </button>
          </div>
        </nav>

        {/* Ações */}
        <div className="mt-7 border-t border-slate-200/70 pt-6">
          <HeaderActions mobile onClick={onClose} />
        </div>

        {/* Informação NexusOn */}
        <div className="relative mt-auto overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100/60 blur-2xl" />

          <div className="relative">
            <p className="text-lg font-extrabold tracking-tight text-slate-950">
              Nexus<span className="text-blue-600">On</span>
            </p>

            <p className="mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
              Da ideia ao projeto.
              <br />
              Do projeto à solução.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}