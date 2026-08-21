import { ArrowRight, X } from "lucide-react";
import Logo from "./Logo";
import HeaderActions from "./HeaderActions";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre nós",
    href: "#sobre",
  },
  {
    label: "Como funciona",
    href: "#como-funciona",
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${
        open
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      {/* Fundo */}
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      {/* Menu */}
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(88%,390px)] flex-col bg-white px-6 pb-8 pt-6 shadow-2xl transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
          >
            <X size={21} />
          </button>
        </div>

        <nav className="mt-10 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.label}

              <ArrowRight size={17} />
            </a>
          ))}
        </nav>

        <div className="mt-8 border-t border-slate-100 pt-7">
          <HeaderActions
            mobile
            onClick={onClose}
          />
        </div>

        <div className="mt-auto rounded-2xl bg-blue-50 p-5">
          <p className="font-bold text-slate-900">
            Nexus<span className="text-blue-600">On</span>
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Da ideia ao projeto.
            <br />
            Do projeto à solução.
          </p>
        </div>
      </aside>
    </div>
  );
}