import { Rocket, X } from "lucide-react";

interface AnnouncementBarProps {
  visible: boolean;
  onClose: () => void;
}

export default function AnnouncementBar({
  visible,
  onClose,
}: AnnouncementBarProps) {
  return (
    <div
      className={`fixed inset-x-0 top-0 z-[70] overflow-hidden border-b border-blue-100 bg-blue-50/95 backdrop-blur-xl transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="relative mx-auto flex min-h-[40px] w-full max-w-7xl items-center justify-center px-10 py-2 sm:px-12">
        <div className="flex items-center justify-center gap-2 text-center">
          <Rocket
            size={14}
            className="shrink-0 text-blue-600"
          />

          <p className="text-[11px] font-medium leading-4 text-slate-600 sm:text-xs">
            A NexusOn está a ser construída. Estamos a desenvolver
            novas funcionalidades para tornar a plataforma cada vez
            mais útil e acessível.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar aviso"
          className="absolute right-2 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-white hover:text-slate-700 active:scale-90 sm:right-4"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}