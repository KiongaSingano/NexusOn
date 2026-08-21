import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Play,
  Rocket,
  Search,
  Users,
} from "lucide-react";

const rotatingWords = [
  "uma ideia",
  "um TCC",
  "um projeto",
  "uma solução",
];

const features = [
  {
    icon: Lightbulb,
    text: "Transforma ideias",
  },
  {
    icon: Users,
    text: "Encontra orientação",
  },
  {
    icon: Rocket,
    text: "Desenvolve projetos",
  },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setWordIndex(
          (current) => (current + 1) % rotatingWords.length,
        );

        setVisible(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ================================================= */}
          {/* TEXTO */}
          {/* ================================================= */}

          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>

              Um ecossistema para quem quer construir
            </div>

            {/* Título */}
<h1 className="text-[2.9rem] font-bold leading-[1.03] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
  <span className="block">
    Tens{" "}
    <span className="relative inline-grid min-w-[9.5ch] align-baseline">
      <span
        className={`col-start-1 row-start-1 text-blue-600 transition-all duration-300 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0"
        }`}
      >
        {rotatingWords[wordIndex]}
      </span>
    </span>
  </span>

  <span className="block">
    que merece
  </span>

  <span className="block">
    sair do papel?
  </span>
</h1>

            {/* Descrição */}
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              No{" "}
              <strong className="font-semibold text-slate-900">
                NexusOn
              </strong>
              , encontras orientação, tecnologia, recursos e
              acompanhamento para transformar conhecimento e ideias
              em projetos reais.
            </p>

            {/* Botões */}
<div className="mt-9 flex flex-col gap-3 sm:flex-row">

  <Link
    to="/criar-conta"
    className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-2xl"
  >
    Começar agora

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  <Link
    to="/como-funciona"
    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
  >
    <Play size={15} fill="currentColor" />

    Como funciona
  </Link>

</div>

            {/* Features */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <Icon
                      size={16}
                      className="text-blue-600"
                    />

                    {feature.text}
                  </div>
                );
              })}
            </div>

          </div>

          {/* ================================================= */}
          {/* MOCKUP / PRODUTO */}
          {/* ================================================= */}

          <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">

            {/* Glow */}
            <div className="absolute -inset-8 rounded-[4rem] bg-blue-600/10 blur-3xl" />

            {/* Cards flutuantes */}
            <div className="absolute -left-3 top-16 z-20 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Search
                    size={19}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    Procurar
                  </p>

                  <p className="text-xs font-bold text-slate-900">
                    Encontra um mentor
                  </p>
                </div>

              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 z-20 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block lg:-right-7">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                  <CheckCircle2
                    size={19}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    Acompanhamento
                  </p>

                  <p className="text-xs font-bold text-slate-900">
                    Projeto atualizado
                  </p>
                </div>

              </div>
            </div>

            {/* App */}
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">

              {/* Browser */}
              <div className="flex h-12 items-center gap-2 border-b border-slate-100 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                <div className="ml-3 flex h-7 flex-1 items-center rounded-md bg-slate-50 px-3 text-[10px] text-slate-400">
                  app.nexuson.com
                </div>
              </div>

              {/* App content */}
              <div className="bg-slate-50 p-4 sm:p-6">

                {/* App header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                      N
                    </div>

                    <div>
                      <p className="text-[9px] text-slate-400">
                        NexusOn
                      </p>

                      <p className="text-xs font-bold text-slate-900">
                        Meu espaço
                      </p>
                    </div>
                  </div>

                  <div className="h-8 w-8 rounded-full bg-slate-200" />

                </div>

                {/* Greeting */}
                <div className="mt-6">
                  <p className="text-[10px] text-slate-400">
                    Olá 👋
                  </p>

                  <h2 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                    No que estás a trabalhar?
                  </h2>
                </div>

                {/* Search */}
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3">
                  <Search
                    size={15}
                    className="text-slate-400"
                  />

                  <span className="text-[10px] text-slate-400">
                    Procurar projetos, TCCs, mentores...
                  </span>
                </div>

                {/* Quick actions */}
                <div className="mt-4 grid grid-cols-3 gap-2">

                  <div className="rounded-xl bg-blue-600 p-3 text-white">
                    <Lightbulb size={16} />

                    <p className="mt-3 text-[9px] font-semibold">
                      Nova ideia
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <Rocket
                      size={16}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-[9px] font-semibold text-slate-700">
                      Projeto
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <Users
                      size={16}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-[9px] font-semibold text-slate-700">
                      Mentor
                    </p>
                  </div>

                </div>

                {/* Project */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
                        Projeto em desenvolvimento
                      </p>

                      <h3 className="mt-1 text-xs font-bold text-slate-900">
                        Sistema de Gestão Académica
                      </h3>
                    </div>

                    <ChevronRight
                      size={16}
                      className="text-slate-300"
                    />

                  </div>

                  {/* Progress */}
                  <div className="mt-4">

                    <div className="mb-2 flex justify-between">
                      <span className="text-[9px] text-slate-400">
                        Progresso
                      </span>

                      <span className="text-[9px] font-bold text-blue-600">
                        68%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[68%] rounded-full bg-blue-600" />
                    </div>

                  </div>

                </div>

                {/* Bottom cards */}
                <div className="mt-3 grid grid-cols-2 gap-2">

                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[9px] text-slate-400">
                      Próxima mentoria
                    </p>

                    <p className="mt-1 text-[10px] font-bold text-slate-900">
                      Sexta · 15:00
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[9px] text-slate-400">
                      Tarefas
                    </p>

                    <p className="mt-1 text-[10px] font-bold text-green-600">
                      8 concluídas
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}