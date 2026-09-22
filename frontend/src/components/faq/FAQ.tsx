import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQProps {
  chatOpen: boolean;
  onToggleChat: () => void;
}

const faqs = [
  {
    question: "O que é o NexusOn?",
    answer:
      "O NexusOn é uma plataforma que ajuda estudantes e jovens a transformar ideias, conhecimentos e projetos em soluções reais através de orientação, tecnologia, recursos e acompanhamento.",
  },
  {
    question: "O NexusOn ajuda na realização de TCCs?",
    answer:
      "Sim. Ajudamos estudantes na definição do tema, estruturação, desenvolvimento e acompanhamento do TCC, de acordo com a área de formação e os objetivos do projeto.",
  },
  {
    question: "Ainda não tenho um tema para o meu TCC. Podem ajudar?",
    answer:
      "Sim. Ajudamos a encontrar ideias e temas relacionados com a sua área de formação, interesses e problemas reais que possam ser transformados em projetos.",
  },
  {
    question: "Como posso começar um projeto com o NexusOn?",
    answer:
      "Não precisa ter tudo definido. Pode começar com uma ideia, um problema ou apenas uma necessidade. Entre em contacto connosco e ajudaremos a definir os próximos passos.",
  },
];

export default function FAQ({
  chatOpen,
  onToggleChat,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative z-10 scroll-mt-28 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* TÍTULO */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Perguntas frequentes
        </h2>

        {/* PERGUNTAS */}
        <div className="mt-10 border-t border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer touch-manipulation items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-150 sm:text-[15px] ${
                      isOpen
                        ? "text-blue-600"
                        : "text-slate-700 group-hover:text-blue-600"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 text-slate-400 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 text-blue-600"
                        : "group-hover:text-blue-600"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-250 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 pr-10 text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTÃO DO ASSISTENTE */}
        <div className="relative z-[300] mt-10 flex justify-center">
          <button
            type="button"
            onClick={onToggleChat}
            aria-expanded={chatOpen}
            aria-label={
              chatOpen
                ? "Fechar assistente"
                : "Abrir assistente"
            }
            className="
              relative
              z-[301]
              flex
              min-h-[44px]
              touch-manipulation
              cursor-pointer
              select-none
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-600
              shadow-sm
              transition-all
              duration-150
              hover:-translate-y-0.5
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
              hover:shadow-md
              active:translate-y-0
              active:scale-[0.98]
            "
          >
            <MessageCircle
              size={17}
              strokeWidth={1.8}
              className={`shrink-0 transition-transform duration-150 ${
                chatOpen
                  ? "rotate-12 text-blue-600"
                  : "text-slate-500"
              }`}
            />

            <span>
              {chatOpen
                ? "Fechar assistente"
                : "Ainda precisa de ajuda?"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}