import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Play,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

import studentsTech from "../../assets/hero/students-tech.jpeg";
import studentsProject from "../../assets/hero/students-project.jpg";
import studentsPresentation from "../../assets/hero/students-presentation.jpg";

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
          (current) => (current + 1) % rotatingWords.length
        );
        setVisible(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-slate-50"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow principal */}
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-200/50 blur-3xl" />

        <div className="absolute -bottom-52 -left-52 h-[600px] w-[600px] rounded-full bg-blue-100/70 blur-3xl" />

        {/* Mancha azul escura */}
        <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ================================================= */}
      {/* CONTEÚDO */}
      {/* ================================================= */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

          {/* ================================================= */}
          {/* TEXTO */}
          {/* ================================================= */}

          <div className="relative z-10 max-w-2xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>

              Da Ideia ao Projeto. Do Projeto à Solução.
            </div>

            {/* Título */}
            <h1 className="text-[2.8rem] font-bold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.4rem] xl:text-[4.8rem]">
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
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              No{" "}
              <strong className="font-semibold text-slate-950">
                Nexus<span className="text-blue-600">On</span>
              </strong>
              , encontras orientação, tecnologia e acompanhamento
              para transformar conhecimento e ideias em projetos reais.
            </p>

            {/* Botões */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/criar-conta"
                className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
              >
                Começar agora

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/como-funciona"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Play size={15} fill="currentColor" />

                Como funciona
              </Link>
            </div>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm font-medium text-slate-500"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100">
                      <Icon
                        size={15}
                        className="text-blue-600"
                      />
                    </span>

                    {feature.text}
                  </div>
                );
              })}
            </div>

            {/* Pequeno indicador */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-50 bg-blue-600 text-[10px] font-bold text-white">
                  N
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-50 bg-slate-800 text-[10px] font-bold text-white">
                  +
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Um espaço para estudantes, criadores e futuros
                empreendedores.
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* ÁREA VISUAL */}
          {/* ================================================= */}

          <div className="relative mx-auto h-[520px] w-full max-w-[600px] sm:h-[600px]">

            {/* Forma azul de fundo */}
            <div className="absolute right-4 top-12 h-[420px] w-[420px] rounded-[4rem] bg-blue-600/10 rotate-6 blur-sm" />

            <div className="absolute right-8 top-20 h-[400px] w-[400px] rounded-[4rem] bg-blue-600" />

            {/* Imagem principal */}
            <div className="absolute right-0 top-8 z-10 h-[350px] w-[82%] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 sm:h-[400px]">
              <img
                src={studentsTech}
                alt="Estudantes trabalhando com tecnologia"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl border border-white/20 bg-white/15 p-3 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} />

                    <span className="text-xs font-semibold">
                      Ideias ganham direção
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda imagem */}
            <div className="absolute bottom-8 left-0 z-20 h-[210px] w-[58%] overflow-hidden rounded-[1.7rem] border-8 border-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:-rotate-2 sm:h-[245px]">
              <img
                src={studentsProject}
                alt="Estudantes desenvolvendo um projeto"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] text-white/80">
                  Desenvolvimento
                </p>

                <p className="text-sm font-bold text-white">
                  Projeto em construção
                </p>
              </div>
            </div>

            {/* Terceira imagem */}
            <div className="absolute -right-2 bottom-0 z-30 h-[155px] w-[42%] overflow-hidden rounded-[1.5rem] border-8 border-white shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:rotate-2 sm:h-[180px]">
              <img
                src={studentsPresentation}
                alt="Estudantes apresentando um projeto"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Card mentor */}
            <div className="absolute -left-2 top-24 z-40 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Users
                    size={19}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    NexusOn
                  </p>

                  <p className="text-xs font-bold text-slate-900">
                    Orientação encontrada
                  </p>
                </div>
              </div>
            </div>

            {/* Card projeto */}
            <div className="absolute -right-2 top-[58%] z-40 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl sm:block lg:-right-8">
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

            {/* Bolinha decorativa */}
            <div className="absolute -right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <div className="h-3 w-3 rounded-full bg-blue-600" />
            </div>

            {/* Pequenos pontos */}
            <div className="absolute bottom-20 right-1/2 h-3 w-3 rounded-full bg-blue-400" />
            <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-blue-300" />
          </div>
        </div>
      </div>

      {/* Indicador inferior */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-slate-400 sm:flex">
        <span>Descobre o que podes construir</span>

        <ArrowRight size={14} />
      </div>
    </section>
  );
}