import { useLocation, useNavigate } from "react-router-dom";
import type { MouseEvent } from "react";

export default function Logo() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    // Se já estiver na página inicial, volta ao topo
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Se estiver noutra página, vai para a página inicial
    navigate("/");

    // Depois de carregar a Home, vai para o topo
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <a
      href="/"
      onClick={handleLogoClick}
      className="group inline-flex items-center gap-2"
      aria-label="NexusOn - Página inicial"
    >
      {/* Símbolo */}
      <span className="relative flex h-9 w-9 items-center justify-center">
        {/* Anel */}
        <span className="absolute inset-0 rounded-xl border-2 border-blue-600 transition-transform duration-300 group-hover:rotate-45" />

        {/* Núcleo */}
        <span className="relative h-2.5 w-2.5 rounded-full bg-blue-600 transition-all duration-300 group-hover:scale-125" />

        {/* Pequena conexão */}
        <span className="absolute right-0 top-1 h-1.5 w-1.5 rounded-full bg-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* Nome */}
      <span className="text-xl font-bold tracking-tight text-slate-900">
        Nexus
        <span className="text-blue-600">On</span>
      </span>
    </a>
  );
}