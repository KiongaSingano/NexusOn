import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import type { IconType } from "react-icons";

import Logo from "../header/Logo";

const platformLinks = [
  ["Início", "/"],
  ["Oportunidades", "/oportunidades"],
  ["Comunidades", "/comunidades"],
  ["Contactos", "/contactos"],
  ["FAQ", "/#faq"],
];

const resourceLinks = [
  ["Projetos", "#projetos"],
  ["Mentorias", "#mentorias"],
  ["Acompanhamento", "#acompanhamento"],
];

const socials: [string, string, IconType, string][] = [
  ["Facebook", "#", FaFacebookF, "hover:bg-blue-600"],
  ["Instagram", "#", FaInstagram, "hover:bg-pink-600"],
  ["LinkedIn", "#", FaLinkedinIn, "hover:bg-blue-600"],
  [
    "WhatsApp",
    "https://wa.me/244946614043",
    FaWhatsapp,
    "hover:bg-green-600",
  ],
];

const linkClass =
  "group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white";

const arrowClass =
  "shrink-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071A33] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">

          <div>
            <div className="[&_span]:text-white [&_span_span]:text-blue-400">
              <Logo />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Um ecossistema para transformar ideias, conhecimento e projetos
              em soluções reais.
            </p>

            <div className="mt-6 flex gap-2">
              {socials.map(([label, href, Icon, hover]) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-150 hover:-translate-y-1 hover:text-white hover:shadow-lg ${hover}`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em]">
              Plataforma
            </h3>

            <ul className="mt-5 space-y-3">
              {platformLinks.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className={linkClass}>
                    {label}
                    <ArrowUpRight size={13} className={arrowClass} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em]">
              Recursos
            </h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className={linkClass}>
                    {label}
                    <ArrowUpRight size={13} className={arrowClass} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em]">
              Contactos
            </h3>

            <div className="mt-5 space-y-4">
              <a href="tel:+244946614043" className={linkClass}>
                <Phone size={16} className="shrink-0 text-blue-400" />
                <span>+244 946 614 043</span>
                <ArrowUpRight size={13} className={arrowClass} />
              </a>

              <a
                href="mailto:apoio.nexuson@outlook.com"
                className={linkClass}
              >
                <Mail size={16} className="shrink-0 text-blue-400" />
                <span>apoio.nexuson@outlook.com</span>
                <ArrowUpRight size={13} className={arrowClass} />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1%C2%BA+de+Maio%2C+Cabinda%2C+Angola"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <MapPin size={16} className="shrink-0 text-blue-400" />
                <span>1º de Maio, Cabinda</span>
                <ArrowUpRight size={13} className={arrowClass} />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=F%C3%A1tima+Urbano%2C+Largo+Wassanjuca%2C+Huambo%2C+Angola"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} max-w-full items-start`}
              >
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                <span className="break-words">
                  Fátima Urbano, Largo Wassanjuca, Huambo
                </span>
                <ArrowUpRight
                  size={13}
                  className={`${arrowClass} mt-0.5`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} Grupo Ngana · NexusOn.
            Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/termos"
              className="text-xs text-slate-500 hover:text-white"
            >
              Termos
            </Link>

            <Link
              to="/privacidade"
              className="text-xs text-slate-500 hover:text-white"
            >
              Privacidade
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Voltar ao topo"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}