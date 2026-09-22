import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Oportunidades", to: "/oportunidades" },
  { label: "Comunidades", to: "/comunidades" },
  { label: "Contactos", to: "/contactos" },
];

export default function DesktopNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
      window.setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const handleFAQ = () => {
    if (location.pathname === "/") {
      document.getElementById("faq")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
    <nav
      aria-label="Navegação principal"
      className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/40 p-1 shadow-sm backdrop-blur-xl lg:flex"
    >
      {navItems.map((item) => {
        const active =
          item.to === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.to);

        if (item.label === "Início") {
          return (
            <button
              key={item.label}
              type="button"
              onClick={goHome}
              aria-current={active ? "page" : undefined}
              className={`group relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:bg-white/70 hover:text-blue-600"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-200 ${
                  active
                    ? "w-4 opacity-100"
                    : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
                }`}
              />
            </button>
          );
        }

        return (
          <Link
            key={item.label}
            to={item.to}
            className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:bg-white/70 hover:text-blue-600"
            }`}
          >
            {item.label}

            <span
              className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-200 ${
                active
                  ? "w-4 opacity-100"
                  : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
              }`}
            />
          </Link>
        );
      })}

      <button
        type="button"
        onClick={handleFAQ}
        className="group relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white/70 hover:text-blue-600"
      >
        FAQ

        <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-blue-600 opacity-0 transition-all duration-200 group-hover:w-3 group-hover:opacity-70" />
      </button>
    </nav>
  );
}