import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Como funciona",
    href: "#como-funciona",
  },
  {
    label: "Soluções",
    href: "#solucoes",
  },
  {
    label: "Sobre nós",
    href: "#sobre",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            {/* Logo mark */}
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20 transition duration-300 group-hover:scale-105">
              <span className="text-lg font-extrabold text-white">
                N
              </span>

              <div className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-blue-400/40" />
            </div>

            {/* Brand */}
            <span className="text-xl font-bold tracking-tight text-slate-950">
              Nexus<span className="text-blue-600">On</span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}

                {item.label === "Soluções" && (
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 lg:flex">

            <a
              href="#login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Entrar
            </a>

            <a
              href="#começar"
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
            >
              Começar agora

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
            aria-label={
              isMenuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-slate-950/30 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[min(88%,380px)] bg-white px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">

            {/* Mobile navigation */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.label}

                  <ArrowRight
                    size={17}
                    className="text-slate-300"
                  />
                </a>
              ))}
            </nav>

            {/* Mobile actions */}
            <div className="mt-6 border-t border-slate-100 pt-6">

              <a
                href="#login"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Entrar
              </a>

              <a
                href="#começar"
                onClick={closeMenu}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Começar agora
                <ArrowRight size={17} />
              </a>

            </div>

            {/* Mobile brand message */}
            <div className="mt-auto rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-bold text-slate-900">
                Nexus<span className="text-blue-600">On</span>
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Da ideia ao projeto.
                <br />
                Do projeto à solução.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}