import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Search,
  Sparkles,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ChatAssistant from "../components/chatbot/ChatAssistant";

const categories = [
  {
    icon: GraduationCap,
    title: "Bolsas",
    description: "Apoio para estudantes e formação.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Estágios",
    description: "Experiências para entrar no mercado.",
  },
  {
    icon: Sparkles,
    title: "Formação",
    description: "Cursos, workshops e capacitações.",
  },
  {
    icon: Trophy,
    title: "Concursos",
    description: "Desafios, competições e iniciativas.",
  },
  {
    icon: CalendarDays,
    title: "Eventos",
    description: "Eventos académicos e profissionais.",
  },
  {
    icon: Wallet,
    title: "Financiamento",
    description: "Apoio para ideias e projetos.",
  },
];

export default function Opportunities() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/50 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-100/70 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8 lg:pb-20">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-xl sm:text-sm">
                <Sparkles size={15} />

                Oportunidades para crescer
              </div>

              {/* Título */}
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Descobre oportunidades
                <span className="block text-blue-600">
                  para o teu próximo passo.
                </span>
              </h1>

              {/* Descrição */}
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Um espaço onde poderás encontrar bolsas, estágios,
                formações, concursos, eventos e oportunidades de
                financiamento para desenvolver o teu percurso.
              </p>

              {/* Pesquisa */}
              <div className="mx-auto mt-9 max-w-2xl">
                <div className="flex items-center rounded-2xl border border-white/80 bg-white/80 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                  <Search
                    size={19}
                    className="ml-3 shrink-0 text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Pesquisar oportunidades..."
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:block"
                  >
                    Pesquisar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORIAS
        ====================================================== */}

        <section className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Explora
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              O que podes encontrar
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Estamos a preparar diferentes tipos de oportunidades
              para ajudar estudantes e jovens a encontrar novos
              caminhos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-950">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            ESTADO SEM OPORTUNIDADES
        ====================================================== */}

        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-slate-900/5 sm:p-12">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-50 blur-3xl" />

            <div className="relative">
              {/* Ícone */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Bell size={27} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Em preparação
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                As oportunidades estão a chegar.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Neste momento ainda não temos oportunidades
                publicadas. Estamos a preparar esta área para
                reunir oportunidades relevantes para estudantes,
                criadores e futuros empreendedores.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/criar-conta"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Criar conta

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/comunidade"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Users size={17} />

                  Explorar comunidade
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="px-5 pb-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-12 shadow-2xl shadow-blue-600/20 sm:px-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                  NexusOn
                </p>

                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Da ideia ao projeto.
                  <span className="block text-blue-100">
                    Do projeto à solução.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                  Cria a tua conta e acompanha as novidades que
                  estamos a preparar.
                </p>
              </div>

              <Link
                to="/criar-conta"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Começar agora

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ChatAssistant />
    </div>
  );
}