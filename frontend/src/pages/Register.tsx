import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

import authImage from "../assets/auth-nexuson.jpg";

export default function Register() {
  const [step, setStep] = useState(1);
  const [focused, setFocused] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
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

  const nextStep = () => {
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim()
    ) {
      setError("Preenche todos os campos para continuar.");
      return;
    }

    setError("");
    setStep(2);
  };

  const previousStep = () => {
    setError("");
    setStep(1);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (form.password.length < 6) {
      setError(
        "A palavra-passe deve ter pelo menos 6 caracteres."
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("As palavras-passe não coincidem.");
      return;
    }

    if (!accepted) {
      setError(
        "Aceita os termos de utilização para criar a conta."
      );
      return;
    }

    setError("");
    setLoading(true);

    // Preparado para ligar ao backend.
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fundo */}
      <img
        src={authImage}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/40" />

      <div className="absolute -right-32 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-4 py-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">

          {/* Card */}
          <div
            className="
              group relative overflow-hidden rounded-[2rem]
              border border-white/25
              bg-white/[0.12]
              p-5
              shadow-2xl shadow-black/30
              backdrop-blur-2xl
              transition
              hover:bg-white/[0.15]
              sm:p-6
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none absolute -right-24 -top-24
                h-48 w-48 rounded-full
                bg-white/20 blur-3xl
                transition-transform duration-700
                group-hover:translate-x-6
                group-hover:translate-y-6
              "
            />

            {/* Linha superior */}
            <div
              className="
                pointer-events-none absolute inset-x-0 top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
              "
            />

            {/* Cabeçalho */}
            <header className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-white/20
                    bg-white/10
                    text-white
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <UserPlus
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              <h1
                className="
                  text-2xl font-extrabold
                  tracking-tight text-white
                  sm:text-3xl
                "
              >
                Cria a tua conta
              </h1>

              <p
                className="
                  mx-auto mt-2 max-w-sm
                  text-sm leading-5 text-white/65
                "
              >
                {step === 1
                  ? "Começa por indicar os teus dados pessoais."
                  : "Define uma palavra-passe segura para a tua conta."}
              </p>
            </header>

            {/* Indicador das etapas */}
            <div className="relative mt-5">
              <div
                className="
                  absolute left-0 right-0 top-4
                  h-px bg-white/15
                "
              />

              <div className="relative flex justify-between">
                <Step
                  number={1}
                  label="Dados"
                  active={step >= 1}
                  completed={step > 1}
                />

                <Step
                  number={2}
                  label="Segurança"
                  active={step === 2}
                  completed={false}
                />
              </div>
            </div>

            {/* Formulário */}
            <form
              onSubmit={handleSubmit}
              className="relative mt-5"
            >
              {/* ETAPA 1 */}
              {step === 1 && (
                <div className="space-y-3.5">

                  <Field
                    id="name"
                    label="Nome completo"
                    type="text"
                    value={form.name}
                    placeholder="O teu nome completo"
                    autoComplete="name"
                    setFocused={setFocused}
                    onChange={(value) =>
                      updateField("name", value)
                    }
                    inputClass={inputClass}
                  />

                  <Field
                    id="phone"
                    label="Telefone"
                    type="tel"
                    value={form.phone}
                    placeholder="+244 9XX XXX XXX"
                    autoComplete="tel"
                    setFocused={setFocused}
                    onChange={(value) =>
                      updateField("phone", value)
                    }
                    inputClass={inputClass}
                  />

                  <Field
                    id="email"
                    label="E-mail"
                    type="email"
                    value={form.email}
                    placeholder="exemplo@email.com"
                    autoComplete="email"
                    setFocused={setFocused}
                    onChange={(value) =>
                      updateField("email", value)
                    }
                    inputClass={inputClass}
                  />

                  {error && (
                    <ErrorMessage>
                      {error}
                    </ErrorMessage>
                  )}

                  <button
                    type="button"
                    onClick={nextStep}
                    className="
                      group/btn mt-1 flex w-full
                      items-center justify-center
                      gap-2 rounded-xl
                      border border-blue-300/30
                      bg-blue-600/90 px-5 py-3
                      text-sm font-bold text-white
                      shadow-lg shadow-blue-950/30
                      transition
                      hover:-translate-y-0.5
                      hover:bg-blue-500
                    "
                  >
                    Continuar

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        group-hover/btn:translate-x-1
                      "
                    />
                  </button>
                </div>
              )}

              {/* ETAPA 2 */}
              {step === 2 && (
                <div className="space-y-3.5">

                  <PasswordField
                    id="password"
                    label="Palavra-passe"
                    value={form.password}
                    placeholder="Cria uma palavra-passe"
                    show={showPassword}
                    setFocused={setFocused}
                    onToggle={() =>
                      setShowPassword(
                        (value) => !value
                      )
                    }
                    onChange={(value) =>
                      updateField(
                        "password",
                        value
                      )
                    }
                    inputClass={inputClass}
                  />

                  <PasswordField
                    id="confirmPassword"
                    label="Confirmar palavra-passe"
                    value={form.confirmPassword}
                    placeholder="Repete a palavra-passe"
                    show={showConfirmPassword}
                    setFocused={setFocused}
                    onToggle={() =>
                      setShowConfirmPassword(
                        (value) => !value
                      )
                    }
                    onChange={(value) =>
                      updateField(
                        "confirmPassword",
                        value
                      )
                    }
                    inputClass={inputClass}
                  />

                  {/* Termos */}
                  <label
                    className="
                      flex cursor-pointer
                      items-start gap-3 pt-1
                    "
                  >
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(event) =>
                        setAccepted(
                          event.target.checked
                        )
                      }
                      className="
                        mt-1 h-4 w-4
                        accent-blue-600
                      "
                    />

                    <span
                      className="
                        text-xs leading-5
                        text-white/55
                      "
                    >
                      Concordo com os termos de
                      utilização e a política de
                      privacidade do NexusOn.
                    </span>
                  </label>

                  {error && (
                    <ErrorMessage>
                      {error}
                    </ErrorMessage>
                  )}

                  {/* Botões */}
                  <div
                    className="
                      grid grid-cols-[auto_1fr]
                      gap-3 pt-1
                    "
                  >
                    <button
                      type="button"
                      onClick={previousStep}
                      className="
                        flex items-center
                        justify-center gap-2
                        rounded-xl
                        border border-white/15
                        bg-white/10 px-4 py-3
                        text-sm font-semibold
                        text-white/80
                        transition
                        hover:bg-white/15
                        hover:text-white
                      "
                    >
                      <ArrowLeft size={17} />
                      Voltar
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        group/btn flex
                        items-center justify-center
                        gap-2 rounded-xl
                        border border-blue-300/30
                        bg-blue-600/90 px-5 py-3
                        text-sm font-bold text-white
                        shadow-lg
                        shadow-blue-950/30
                        transition
                        hover:bg-blue-500
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                      "
                    >
                      <span>
                        {loading
                          ? "A criar..."
                          : "Criar conta"}
                      </span>

                      {!loading && (
                        <ArrowRight
                          size={17}
                          className="
                            transition-transform
                            group-hover/btn:translate-x-1
                          "
                        />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Rodapé */}
            <footer
              className="
                relative mt-4
                border-t border-white/10
                pt-4 text-center
              "
            >
              <p className="text-sm text-white/60">
                Já tens uma conta?{" "}
                <Link
                  to="/entrar"
                  className="
                    font-bold text-blue-200
                    transition hover:text-white
                  "
                >
                  Entrar
                </Link>
              </p>

              <Link
                to="/"
                className="
                  mt-3 inline-block
                  text-xs font-medium
                  text-white/40
                  transition hover:text-white/70
                "
              >
                ← Voltar para o NexusOn
              </Link>
            </footer>
          </div>

          {/* Frase inferior */}
          <p
            className="
              mt-4 text-center
              text-[11px] text-white/45
            "
          >
            Começa com uma ideia. O NexusOn
            ajuda a dar-lhe direção.
          </p>
        </div>
      </div>
    </main>
  );
}

/* =====================================================
   INDICADOR DE ETAPA
===================================================== */

function Step({
  number,
  label,
  active,
  completed,
}: {
  number: number;
  label: string;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`
          flex h-8 w-8
          items-center justify-center
          rounded-full border
          text-xs font-bold
          transition-all duration-300
          ${
            active
              ? "border-blue-300 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "border-white/20 bg-white/10 text-white/50"
          }
        `}
      >
        {completed ? (
          <Check size={15} />
        ) : (
          number
        )}
      </div>

      <span
        className="
          text-[11px]
          font-medium
          text-white/60
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =====================================================
   CAMPO NORMAL
===================================================== */

function Field({
  id,
  label,
  type,
  value,
  placeholder,
  autoComplete,
  setFocused,
  onChange,
  inputClass,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  autoComplete: string;
  setFocused: (value: string) => void;
  onChange: (value: string) => void;
  inputClass: (field: string) => string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-1.5 block
          text-sm font-medium
          text-white/85
        "
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused("")}
        className={inputClass(id)}
      />
    </div>
  );
}

/* =====================================================
   CAMPO DE PALAVRA-PASSE
===================================================== */

function PasswordField({
  id,
  label,
  value,
  placeholder,
  show,
  setFocused,
  onToggle,
  onChange,
  inputClass,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  show: boolean;
  setFocused: (value: string) => void;
  onToggle: () => void;
  onChange: (value: string) => void;
  inputClass: (field: string) => string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-1.5 block
          text-sm font-medium
          text-white/85
        "
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          required
          minLength={6}
          autoComplete="new-password"
          value={value}
          placeholder={placeholder}
          onChange={(event) =>
            onChange(event.target.value)
          }
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused("")}
          className={`${inputClass(id)} pr-12`}
        />

        <button
          type="button"
          onClick={onToggle}
          aria-label={
            show
              ? "Ocultar palavra-passe"
              : "Mostrar palavra-passe"
          }
          className="
            absolute right-2.5 top-1/2
            flex h-8 w-8
            -translate-y-1/2
            items-center justify-center
            rounded-lg
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          {show ? (
            <EyeOff size={17} />
          ) : (
            <Eye size={17} />
          )}
        </button>
      </div>
    </div>
  );
}

/* =====================================================
   MENSAGEM DE ERRO
===================================================== */

function ErrorMessage({
  children,
}: {
  children: string;
}) {
  return (
    <p
      className="
        rounded-lg
        bg-red-500/10
        px-3 py-2
        text-xs
        text-red-200
      "
    >
      {children}
    </p>
  );
}