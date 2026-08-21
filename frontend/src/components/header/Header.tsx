import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Navegação Desktop */}
          <DesktopNav />

          {/* Ações Desktop */}
          <div className="hidden shrink-0 lg:block">
            <HeaderActions />
          </div>

          {/* Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <div id="mobile-navigation">
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </>
  );
}