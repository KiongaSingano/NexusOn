import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

import { useAnnouncement } from "../../context/AnnouncementContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { announcementVisible } = useAnnouncement();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = overflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed inset-x-0 z-[110]
          ${announcementVisible ? "top-10" : "top-0"}
          border-b
          ${
            scrolled
              ? "border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.07)]"
              : "border-transparent bg-white/70"
          }
          backdrop-blur-xl
          transition-all duration-300
        `}
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center justify-between
            px-4 sm:px-6 lg:px-8
            ${scrolled ? "h-16" : "h-[76px]"}
            transition-all duration-300
          `}
        >
          <Logo />

          <div className="hidden flex-1 justify-center lg:flex">
            <DesktopNav />
          </div>

          <div className="hidden lg:block">
            <HeaderActions />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="relative z-[120] flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm lg:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}