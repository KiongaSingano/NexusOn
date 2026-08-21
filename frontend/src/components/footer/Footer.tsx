import { ArrowUp, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import Logo from "../header/Logo";

const platformLinks = [
  { label: "Início", href: "/" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre nós", href: "#sobre" },
];

const resourceLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Mentorias", href: "#mentorias" },
  { label: "Acompanhamento", href: "#acompanhamento" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
    hover: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    hover: "hover:bg-pink-600 hover:border-pink-600",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
    hover: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/244946614043",
    icon: FaWhatsapp,
    hover: "hover:bg-green-600 hover:border-green-600",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#071A33] text-white">

      {/* EFEITOS DE FUNDO */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr]">

          {/* MARCA */}
          <div>
            <div className="[&_span]:text-white [&_span_span]:text-blue-400">
              <Logo />
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Um ecossistema para transformar ideias,
              conhecimento e projetos em soluções reais.
            </p>

            {/* REDES */}
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${social.hover}`}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* PLATAFORMA */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white">
              Plataforma
            </h3>

            <ul className="mt-4 space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RECURSOS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white">
              Recursos
            </h3>

            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white">
              Fala connosco
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Tens uma ideia, projeto ou precisas de orientação?
              Estamos aqui para ajudar.
            </p>

            <div className="mt-4 space-y-3">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/244946614043"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-xl"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
                  <FaWhatsapp size={16} />
                </span>

                <span>Conversar no WhatsApp</span>

                <ArrowUp
                  size={15}
                  className="rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:geral@nexuson.ao"
                className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
              >
                <Mail
                  size={16}
                  className="text-blue-400 transition-transform duration-200 group-hover:scale-110"
                />

                <span>geral@nexuson.ao</span>
              </a>

              {/* LOCALIZAÇÃO */}
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span>
                  1º de Maio, Cabinda, Angola
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Grupo Ngana. | NexusOn. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Termos
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacidade
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ArrowUp size={14} />
            </button>

          </div>
        </div>
      </div>

    </footer>
  );
}