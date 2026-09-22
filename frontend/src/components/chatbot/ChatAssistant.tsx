import { useEffect, useState } from "react";
import { Bot, ChevronRight, MessageCircle, Send, Sparkles, X } from "lucide-react";

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const phone = "946614043";
const whatsappNumber = "244946614043";

const options = [
  ["Tenho uma ideia 💡", "Olá! Tenho uma ideia e gostaria de saber como a NexusOn pode ajudar-me a desenvolvê-la."],
  ["Preciso de ajuda com o TCC 🎓", "Olá! Preciso de ajuda e orientação para desenvolver o meu TCC."],
  ["Quero desenvolver um projeto 🚀", "Olá! Quero desenvolver um projeto e gostaria de receber orientação."],
  ["Quero encontrar um mentor 👨🏽‍🏫", "Olá! Gostaria de encontrar orientação ou um mentor através da NexusOn."],
  ["Tenho uma dúvida ❓", "Olá! Tenho uma dúvida e gostaria de falar com a equipa da NexusOn."],
];

export default function ChatAssistant({ open: externalOpen, onOpenChange }: Props) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chooser, setChooser] = useState(false);

  useEffect(() => {
    if (externalOpen !== undefined) setOpen(externalOpen);
  }, [externalOpen]);

  const toggle = () => {
    const value = !open;
    setOpen(value);
    onOpenChange?.(value);
  };

  const send = () => {
    if (message.trim()) setChooser(true);
  };

  const whatsapp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setChooser(false);
  };

  const sms = () => {
    window.location.href = `sms:${phone}?body=${encodeURIComponent(message)}`;
    setChooser(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {open && (
        <div className="absolute bottom-16 right-0 mb-3 w-[calc(100vw-2rem)] max-w-[390px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <header className="bg-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Bot size={20} />
                </div>
                <div>
                  <b className="flex items-center gap-1 text-sm">
                    Assistente NexusOn <Sparkles size={13} />
                  </b>
                  <span className="text-xs text-blue-100">
                    Como podemos ajudar?
                  </span>
                </div>
              </div>

              <button onClick={toggle} aria-label="Fechar">
                <X size={19} />
              </button>
            </div>
          </header>

          <div className="bg-slate-50 p-4">
            <div className="rounded-2xl rounded-bl-md bg-white p-3 text-sm leading-6 text-slate-600 shadow-sm">
              Olá 👋 Sou o assistente da <b>NexusOn</b>.<br />
              Escolha uma opção ou escreva a sua mensagem.
            </div>

            <div className="mt-4 space-y-2">
              {options.map(([label, text]) => (
                <button
                  key={label}
                  onClick={() => setMessage(text)}
                  className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-xs font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  {label}
                  <ChevronRight size={15} />
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Escreva a sua mensagem..."
                rows={3}
                className="w-full resize-none bg-transparent px-2 py-1 text-sm leading-6 outline-none"
              />

              <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                <span className="px-2 text-[10px] text-slate-400">
                  Enter para enviar
                </span>

                <button
                  onClick={send}
                  disabled={!message.trim()}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white disabled:bg-slate-200"
                >
                  Enviar <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {chooser && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 p-5 backdrop-blur-sm">
              <div className="w-full max-w-[300px] rounded-2xl bg-white p-4 shadow-2xl">
                <h3 className="text-sm font-bold text-slate-900">
                  Como deseja enviar?
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Escolha uma aplicação disponível no seu dispositivo.
                </p>

                <div className="mt-4 grid gap-2">
                  <button
                    onClick={whatsapp}
                    className="rounded-xl bg-green-500 px-4 py-3 text-sm font-semibold text-white hover:bg-green-600"
                  >
                    WhatsApp
                  </button>

                  <button
                    onClick={sms}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    SMS
                  </button>

                  <button
                    onClick={() => setChooser(false)}
                    className="py-2 text-xs text-slate-400"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={toggle}
        aria-label={open ? "Fechar assistente" : "Abrir assistente"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-700 active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}

        {!open && (
          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
        )}
      </button>
    </div>
  );
}