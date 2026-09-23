import { useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  LockKeyhole,
  Search,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  X,
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
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const results = useMemo(() => {
    const term = search.toLowerCase().trim();

    return categories.filter(
      (item) =>
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
    );
  }, [search]);

  const openModal = (title: string) => {
    setSelected(title);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
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

          <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-xl sm:text-sm">
                <Sparkles size={15} />
                Oportunidades para crescer
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Encontra oportunidades
                <span className="block text-blue-600">
                  para o teu próximo passo.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Bolsas, estágios, formações, concursos, eventos e
                financiamento reunidos num só espaço.
              </p>

              {/* PESQUISA */}
              <div className="mx-auto mt-9 max-w-2xl">
                <div className="flex items-center rounded-2xl border border-white/80 bg-white/90 p-2 shadow-xl shadow-slate-900/5">
                  <Search
                    size={19}
                    className="ml-3 shrink-0 text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar oportunidades..."
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="mr-2 text-slate-400 hover:text-slate-700"
                      aria-label="Limpar pesquisa"
                    >
                      <X size={17} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Explora
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Oportunidades por categoria
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Escolhe uma categoria para consultar as oportunidades.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => openModal(item.title)}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={21} />
                    </div>

                    <LockKeyhole
                      size={16}
                      className="text-slate-300 transition group-hover:text-blue-500"
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <ArrowRight
                      size={17}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {!results.length && (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <Search className="mx-auto text-slate-300" />

              <h3 className="mt-3 font-bold text-slate-900">
                Nenhuma oportunidade encontrada
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Tenta pesquisar por outro termo.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <ChatAssistant />

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <LockKeyhole size={24} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {selected}
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
              Inicia sessão para continuar.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              As oportunidades estão disponíveis para contas
              autenticadas. Cria uma conta ou inicia sessão para
              veres os detalhes, requisitos e informações de
              candidatura.
            </p>

            <div className="mt-6 grid gap-3">
              <Link
                to="/criar-conta"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
              >
                Criar conta
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/entrar"
                className="flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Iniciar sessão
              </Link>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="py-2 text-sm font-medium text-slate-400 hover:text-slate-600"
              >
                Continuar a explorar
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <Users size={13} />
              O acesso aos detalhes requer uma conta.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}