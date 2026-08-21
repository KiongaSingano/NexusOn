import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Register() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Voltar ao NexusOn */}
      <Link
        to="/"
        aria-label="Voltar ao NexusOn"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:left-5 sm:top-5 sm:px-4"
      >
        <ArrowLeft size={17} />

        <span className="hidden sm:inline">
          Voltar ao Nexus<span className="text-blue-600">On</span>
        </span>

        <span className="sm:hidden">
          Nexus<span className="text-blue-600">On</span>
        </span>
      </Link>

      {/* Conteúdo */}
      <div className="flex min-h-screen items-center justify-center px-5 py-24">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">

            {/* Logo */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                Nexus<span className="text-blue-600">On</span>
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Cria a tua conta
              </p>
            </div>

            {/* Formulário */}
            <form className="space-y-5">

              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nome completo
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="O teu nome"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="teuemail@exemplo.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Palavra-passe */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Palavra-passe
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Confirmar */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirmar palavra-passe
                </label>

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Criar conta */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl active:scale-[0.98]"
              >
                Criar conta
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-slate-500">
              Já tens uma conta?{" "}
              <Link
                to="/entrar"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}