import { useState } from "react";
import {
  Bot,
  ChevronRight,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const options = [
  {
    label: "Tenho uma ideia 💡",
    message:
      "Olá! Tenho uma ideia e gostaria de saber como a NexusOn pode ajudar-me a desenvolvê-la.",
  },
  {
    label: "Preciso de ajuda com o TCC 🎓",
    message:
      "Olá! Preciso de ajuda e orientação para desenvolver o meu TCC.",
  },
  {
    label: "Quero desenvolver um projeto 🚀",
    message:
      "Olá! Quero desenvolver um projeto e gostaria de receber orientação.",
  },
  {
    label: "Quero encontrar um mentor 👨🏽‍🏫",
    message:
      "Olá! Gostaria de encontrar orientação ou um mentor através da NexusOn.",
  },
  {
    label: "Tenho uma dúvida ❓",
    message:
      "Olá! Tenho uma dúvida e gostaria de falar com a equipa da NexusOn.",
  },
];

const WHATSAPP = "244946614043";

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openWhatsApp = (text?: string) => {
    const finalMessage =
      text || "Olá! Gostaria de saber mais sobre a NexusOn.";

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(finalMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const toggleChat = () => {
    setOpen((current) => !current);
  };

  const selectOption = (text: string) => {
    setMessage(text);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end sm:bottom-5 sm:right-5">

      {/* JANELA DO CHAT */}
      <div
        className={`w-[calc(100vw-2rem)] max-w-[380px] origin-bottom-right transition-all duration-300 ${
          open
            ? "pointer-events-auto mb-3 scale-100 opacity-100"
            : "pointer-events-none mb-0 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">

          {/* HEADER */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 p-4 text-white">

            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />

            <div className="relative flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
                  <Bot size={20} />

                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-blue-600 bg-green-400" />
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-sm font-bold">
                      Assistente NexusOn
                    </h3>

                    <Sparkles size={14} />
                  </div>

                  <p className="text-xs text-blue-100">
                    Online · Pronto para ajudar
                  </p>
                </div>

              </div>

              {/* FECHAR CHAT */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar assistente"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={18} />
              </button>

            </div>
          </div>

          {/* CONVERSA */}
          <div className="max-h-[55vh] overflow-y-auto bg-slate-50 p-4">

            {/* MENSAGEM DO ASSISTENTE */}
            <div className="flex items-end gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Bot size={16} />
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white p-3 shadow-sm">

                <p className="text-sm leading-6 text-slate-700">
                  Olá 👋 Sou o assistente da{" "}
                  <strong>NexusOn</strong>.
                </p>

                <p className="text-sm leading-6 text-slate-600">
                  Como podemos ajudar-te hoje?
                </p>

              </div>

            </div>

            {/* OPÇÕES */}
            <div className="mt-5 space-y-2">

              <p className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Escolhe uma opção
              </p>

              {options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => selectOption(option.message)}
                  className={`group flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                    message === option.message
                      ? "border-blue-300 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >

                  <span>{option.label}</span>

                  <ChevronRight
                    size={17}
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                  />

                </button>
              ))}

            </div>

            {/* MENSAGEM ESCOLHIDA */}
            {message && (
              <div className="mt-5 flex justify-end">

                <div className="max-w-[85%] rounded-2xl rounded-br-md bg-blue-600 p-3 text-sm leading-6 text-white shadow-md">
                  {message}
                </div>

              </div>
            )}

          </div>

          {/* AÇÃO WHATSAPP */}
          <div className="border-t border-slate-100 bg-white p-3">

            <button
              type="button"
              onClick={() => openWhatsApp(message)}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-600 active:scale-[0.98]"
            >

              <MessageCircle size={17} />

              Continuar no WhatsApp

              <Send
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

            <p className="mt-2 text-center text-[10px] text-slate-400">
              NexusOn · Ideias que ganham direção.
            </p>

          </div>

        </div>
      </div>

      {/* BOTÃO FLUTUANTE */}
      <button
        type="button"
        onClick={toggleChat}
        aria-label={open ? "Fechar assistente" : "Abrir assistente"}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95 sm:h-14 sm:w-14 ${
          open ? "rotate-90" : "rotate-0"
        }`}
      >

        {!open && (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-20" />

            <span className="absolute -inset-1 rounded-full border border-blue-300/50" />
          </>
        )}

        <span className="relative">
          {open ? (
            <X size={22} />
          ) : (
            <MessageCircle size={22} />
          )}
        </span>

        {!open && (
          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
        )}

      </button>

    </div>
  );
}