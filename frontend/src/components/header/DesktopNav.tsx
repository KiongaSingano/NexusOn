import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Início",
    to: "/",
  },
  {
    label: "Oportunidades",
    to: "/oportunidades",
  },
  {
    label: "Explorar",
    to: "/explorar",
  },
  {
    label: "Comunidade",
    to: "/comunidade",
  },
  {
    label: "Sobre Nós",
    to: "/sobre",
  },
  {
    label: "Contacto",
    to: "/contacto",
  },
];

export default function DesktopNav() {
  const location = useLocation();

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/40 p-1 shadow-sm backdrop-blur-xl lg:flex"
    >
      {navItems.map((item) => {
        const active =
          item.to === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.to);

        return (
          <Link
            key={item.label}
            to={item.to}
            className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:bg-white/70 hover:text-blue-600"
            }`}
          >
            <span className="relative z-10">
              {item.label}
            </span>

            {/* Indicador da página ativa */}
            <span
              className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                active
                  ? "w-4 opacity-100"
                  : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}