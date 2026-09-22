import { Rocket, X } from "lucide-react";

import { useAnnouncement } from "../../context/AnnouncementContext";

export default function AnnouncementBar() {
  const {
    announcementVisible,
    closeAnnouncement,
  } = useAnnouncement();

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[70] h-10 overflow-hidden border-b border-blue-100 bg-blue-50/95 backdrop-blur-xl transition-all duration-300 ${
        announcementVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div
        className="
          relative mx-auto flex h-full w-full
          max-w-7xl items-center justify-center
          px-10
          sm:px-12
        "
      >
        <div
          className="
            flex min-w-0 max-w-full
            items-center justify-center
            gap-1.5
            text-center
            sm:gap-2
          "
        >
          <Rocket
            size={13}
            className="shrink-0 text-blue-600 sm:h-[14px] sm:w-[14px]"
            aria-hidden="true"
          />

          <p
            className="
              min-w-0
              truncate
              text-[10px]
              font-medium
              leading-4
              text-slate-600
              sm:text-[11px]
              md:text-xs
            "
          >
            <span className="sm:hidden">
              A NexusOn está a ser construída. Novas
              funcionalidades estão a caminho.
            </span>

            <span className="hidden sm:inline">
              A NexusOn está a ser construída. Estamos a
              desenvolver novas funcionalidades para tornar a
              plataforma cada vez mais útil e acessível.
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={closeAnnouncement}
          aria-label="Fechar aviso"
          className="
            absolute right-1
            flex h-7 w-7
            shrink-0
            items-center justify-center
            rounded-full
            text-slate-400
            transition-all duration-200
            hover:bg-white
            hover:text-slate-700
            active:scale-90
            sm:right-4
          "
        >
          <X
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}