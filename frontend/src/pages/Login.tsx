import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";
import { Link } from "react-router-dom";

import authImage from "../assets/auth-nexuson.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError("Preenche o e-mail e a palavra-passe.");
      return;
    }

    setLoading(true);
    setError("");

    // Preparado para ligar ao backend.
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const inputClass = (field: string) => `
    w-full rounded-xl border bg-black/10 px-4 py-3
    text-sm text-white outline-none transition
    placeholder:text-white/35
    ${
      focused === field
        ? "border-blue-300/80 bg-white/10 ring-4 ring-blue-400/10"
        : "border-white/15"
    }
  `;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <img
        src={authImage}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/40" />

      <div className="absolute -right-32 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-end px-4 py-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">

          <div className="
            group relative overflow-hidden rounded-[2rem]
            border border-white/25 bg-white/[0.12]
            p-5 shadow-2xl shadow-black/30
            backdrop-blur-2xl
            transition hover:bg-white/[0.15]
            sm:p-6
          ">

            <div className="
              pointer-events-none absolute -right-24 -top-24
              h-48 w-48 rounded-full bg-white/20 blur-3xl
              transition-transform duration-700
              group-hover:translate-x-6 group-hover:translate-y-6
            " />

            <div className="
              pointer-events-none absolute inset-x-0 top-0 h-px
              bg-gradient-to-r from-transparent via-white/60 to-transparent
            " />

            {/* Cabeçalho */}
            <header className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/20
                  bg-white/10 text-white shadow-lg
                  backdrop-blur-xl
                ">
                  <LockKeyhole size={19} strokeWidth={1.8} />
                </div>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Bem-vindo de volta
              </h1>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-5 text-white/65">
                Entra na tua conta para continuar a
                explorar o NexusOn.
              </p>
            </header>

            {/* Formulário */}
            <form
              onSubmit={handleSubmit}
              className="relative mt-5 space-y-4"
            >
              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-white/85"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  placeholder="exemplo@email.com"
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  className={inputClass("email")}
                />
              </div>

              {/* Palavra-passe */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-white/85"
                  >
                    Palavra-passe
                  </label>

                  <Link
                    to="/recuperar-senha"
                    className="text-xs font-medium text-blue-200 transition hover:text-white"
                  >
                    Esqueci as minhas credenciais
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    autoComplete="current-password"
                    value={form.password}
                    placeholder="A tua palavra-passe"
                    onChange={(e) =>
                      updateField("password", e.target.value)
                    }
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused("")}
                    className={`${inputClass("password")} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={
                      showPassword
                        ? "Ocultar palavra-passe"
                        : "Mostrar palavra-passe"
                    }
                    className="
                      absolute right-2.5 top-1/2
                      flex h-8 w-8 -translate-y-1/2
                      items-center justify-center rounded-lg
                      text-white/50 transition
                      hover:bg-white/10 hover:text-white
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* Erro */}
              {error && (
                <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-200">
                  {error}
                </p>
              )}

              {/* Entrar */}
              <button
                type="submit"
                disabled={loading}
                className="
                  group/btn relative flex w-full
                  items-center justify-center gap-2
                  overflow-hidden rounded-xl
                  border border-blue-300/30
                  bg-blue-600/90 px-5 py-3
                  text-sm font-bold text-white
                  shadow-lg shadow-blue-950/30
                  transition
                  hover:-translate-y-0.5 hover:bg-blue-500
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                <span className="
                  absolute inset-0 -translate-x-full
                  bg-gradient-to-r from-transparent
                  via-white/20 to-transparent
                  transition-transform duration-700
                  group-hover/btn:translate-x-full
                " />

                <span className="relative">
                  {loading ? "A entrar..." : "Entrar"}
                </span>

                {!loading && (
                  <ArrowRight
                    size={17}
                    className="
                      relative transition-transform
                      group-hover/btn:translate-x-1
                    "
                  />
                )}
              </button>
            </form>

            {/* Rodapé */}
            <footer className="relative mt-5 border-t border-white/10 pt-4 text-center">
              <p className="text-sm text-white/60">
                Ainda não tens uma conta?{" "}
                <Link
                  to="/criar-conta"
                  className="font-bold text-blue-200 transition hover:text-white"
                >
                  Criar conta
                </Link>
              </p>

              <Link
                to="/"
                className="
                  mt-3 inline-block text-xs font-medium
                  text-white/40 transition hover:text-white/70
                "
              >
                ← Voltar para o NexusOn
              </Link>
            </footer>
          </div>

          <p className="mt-4 text-center text-[11px] text-white/45">
            A tua conta, os teus projetos, as tuas oportunidades.
          </p>
        </div>
      </div>
    </main>
  );
}