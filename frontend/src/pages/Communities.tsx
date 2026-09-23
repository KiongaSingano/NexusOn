import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Code2,
  Palette,
  Rocket,
  Search,
  GraduationCap,
  Video,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ChatAssistant from "../components/chatbot/ChatAssistant";

const communities = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    text: "Explora ferramentas, ideias e aplicações de IA.",
  },
  {
    icon: Palette,
    title: "Criatividade",
    text: "Partilha ideias, inspirações e projetos criativos.",
  },
  {
    icon: Video,
    title: "Design, Vídeo & Motion",
    text: "Design gráfico, edição de vídeo e motion design.",
  },
  {
    icon: GraduationCap,
    title: "TCC & Investigação",
    text: "Temas, ideias, investigação e desenvolvimento de TCCs.",
  },
  {
    icon: Rocket,
    title: "Empreendedorismo",
    text: "Ideias de negócio, startups e desenvolvimento de projetos.",
  },
  {
    icon: Code2,
    title: "Tecnologias",
    text: "Programação, desenvolvimento e novas tecnologias.",
  },
];

export default function Communities() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const results = useMemo(() => {
    const term = search.toLowerCase().trim();

    return communities.filter(
      (item) =>
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.text.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-100/70 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-sm">
                <Search size={15} />
                Comunidades NexusOn
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Encontra a tua
                <span className="block text-blue-600">
                  comunidade.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Aprende, partilha ideias e conecta-te com pessoas
                que estão a construir coisas como tu.
              </p>

              <div className="mx-auto mt-9 max-w-2xl">
                <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/5">
                  <Search
                    size={19}
                    className="ml-3 text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar comunidade..."
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="mr-2 text-slate-400 hover:text-slate-700"
                    >
                      <X size={17} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Explora
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Comunidades
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelected(item.title)}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </button>
              );
            })}
          </div>

          {!results.length && (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
              <Search className="mx-auto text-slate-300" />
              <h3 className="mt-3 font-bold text-slate-900">
                Nenhuma comunidade encontrada
              </h3>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <ChatAssistant />

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <UsersIcon />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-blue-600">
              {selected}
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
              Junta-te à comunidade.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Cria uma conta ou inicia sessão para participar
              nesta comunidade e acompanhar as suas atividades.
            </p>

            <div className="mt-6 grid gap-3">
              <Link
                to="/criar-conta"
                className="rounded-xl bg-blue-600 px-5 py-3.5 text-center text-sm font-bold text-white hover:bg-blue-700"
              >
                Criar conta
              </Link>

              <Link
                to="/entrar"
                className="rounded-xl border border-slate-200 px-5 py-3.5 text-center text-sm font-bold text-slate-700 hover:bg-blue-50"
              >
                Iniciar sessão
              </Link>

              <button
                onClick={() => setSelected(null)}
                className="py-2 text-sm text-slate-400 hover:text-slate-600"
              >
                Continuar a explorar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UsersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}