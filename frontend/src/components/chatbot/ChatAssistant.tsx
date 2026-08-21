import { useEffect, useState } from "react";
import {
  Bot,
  ChevronRight,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type Option = {
  label: string;
  message: string;
};

const options: Option[] = [
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

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/244946614043?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleOption = (option: Option) => {
    setSelectedMessage(option.message);

    setTimeout(() => {
      openWhatsApp(option.message);
    }, 300);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end">

      {/* ================================================= */}
      {/* MENSAGEM DE BOAS-VINDAS */}
      {/* ================================================= */}

      {!isOpen && showWelcome && (
        <div className="mb-4 max-w-[270px] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative rounded-2xl rounded-br-md border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">

            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              aria-label="Fechar mensagem"
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={14} />
            </button>

            <div className="pr-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Bot size={15} />
                </span>

                <span className="text-xs font-bold text-slate-900">
                  Assistente NexusOn
                </span>
              </div>

              <p className="text-sm leading-5 text-slate-600">
                👋 Olá! Tens alguma ideia ou projeto em mente?
                Posso ajudar-te a encontrar o próximo passo.
              </p>
            </div>

            {/* Pequena seta */}
            <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-slate-200 bg-white" />
          </div>
        </div>
      )}

      {/* ================================================= */}
      {/* JANELA DO CHAT */}
      {/* ================================================= */}

      <div
        className={`origin-bottom-right transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto mb-4 scale-100 opacity-100"
            : "pointer-events-none mb-0 scale-95 opacity-0"
        }`}
      >
        <div className="w-[calc(100vw-2.5rem)] max-w-[380px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">

          {/* HEADER */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 p-5 text-white">

            {/* Fundo decorativo */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 left-10 h-32 w-32 rounded-full bg-white/5" />

            <div className="relative flex items-start justify-between gap-4">

              <div className="flex items-center gap-3">

                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <Bot size={22} />

                  <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-blue-600 bg-green-400" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold">
                      Assistente NexusOn
                    </h3>

                    <Sparkles size={15} />
                  </div>

                  <p className="mt-0.5 text-xs text-blue-100">
                    Online · Pronto para ajudar
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar assistente"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          {/* CONVERSA */}
          <div className="max-h-[55vh] overflow-y-auto bg-slate-50 p-4">

            {/* Mensagem do bot */}
            <div className="flex items-end gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                <Bot size={16} />
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white p-3 shadow-sm">
                <p className="text-sm leading-6 text-slate-700">
                  Olá 👋 Sou o assistente da{" "}
                  <strong>NexusOn</strong>.
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Diz-me em que podemos ajudar-te.
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
                  onClick={() => handleOption(option)}
                  className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md active:scale-[0.98]"
                >
                  <span>{option.label}</span>

                  <ChevronRight
                    size={17}
                    className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </button>
              ))}
            </div>

            {/* RESPOSTA SELECIONADA */}
            {selectedMessage && (
              <div className="mt-5 flex justify-end">

                <div className="max-w-[85%] rounded-2xl rounded-br-md bg-blue-600 p-3 text-sm leading-6 text-white shadow-md">
                  {selectedMessage}
                </div>

              </div>
            )}

          </div>

          {/* FOOTER DO CHAT */}
          <div className="border-t border-slate-100 bg-white p-3">

            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  selectedMessage ||
                    "Olá! Gostaria de saber mais sobre a NexusOn."
                )
              }
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-200 hover:bg-green-600 hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle size={17} />

              Continuar no WhatsApp

              <Send
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="mt-2 text-center text-[10px] text-slate-400">
              A NexusOn está pronta para ouvir a tua ideia.
            </p>
          </div>

        </div>
      </div>

      {/* ================================================= */}
      {/* BOTÃO FLUTUANTE */}
      {/* ================================================= */}

      <button
        type="button"
        onClick={() => {
          setIsOpen((previous) => !previous);
          setShowWelcome(false);
        }}
        aria-label={
          isOpen
            ? "Fechar assistente"
            : "Abrir assistente"
        }
        className={`group relative flex h-15 w-15 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-2xl active:scale-95 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      >
        {/* Animação */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-30" />

            <span className="absolute -inset-1 rounded-full border border-blue-300/50" />
          </>
        )}

        <span className="relative">
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={25} />
          )}
        </span>

        {/* Indicador online */}
        {!isOpen && (
          <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-400" />
        )}
      </button>

    </div>
  );
}