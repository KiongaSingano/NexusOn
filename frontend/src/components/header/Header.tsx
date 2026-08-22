import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  announcementVisible?: boolean;
}

export default function Header({
  announcementVisible = false,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 z-50 transition-[top,background-color,border-color,box-shadow] duration-300 ${
          announcementVisible
            ? "top-9 sm:top-9"
            : "top-0"
        } ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-2xl"
            : "bg-white/65 backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-16" : "h-[72px]"
          }`}
        >
          {/* LOGO */}
          <div className="shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <Logo />
          </div>

          {/* NAVEGAÇÃO DESKTOP */}
          <div className="hidden lg:block">
            <DesktopNav />
          </div>

          {/* AÇÕES DESKTOP */}
          <div className="hidden shrink-0 lg:block">
            <HeaderActions />
          </div>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            aria-label={
              mobileOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 lg:hidden ${
              mobileOpen
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : "border-slate-200/80 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            } active:scale-95`}
          >
            {/* Ícone X */}
            <span
              className={`absolute transition-all duration-200 ${
                mobileOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-90 scale-50 opacity-0"
              }`}
            >
              <X size={21} />
            </span>

            {/* Ícone Menu */}
            <span
              className={`transition-all duration-200 ${
                mobileOpen
                  ? "-rotate-90 scale-50 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <Menu size={21} />
            </span>
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div id="mobile-navigation">
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </>
  );
}