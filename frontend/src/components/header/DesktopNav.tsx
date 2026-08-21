import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Início",
    to: "/",
  },
  {
    label: "Sobre nós",
    to: "/sobre",
  },
  {
    label: "Como funciona",
    to: "/como-funciona",
  },
];

export default function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const active = location.pathname === item.to;

        return (
          <Link
            key={item.label}
            to={item.to}
            className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {item.label}

            {/* Indicador da página atual */}
            <span
              className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-200 ${
                active ? "w-5" : "w-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}