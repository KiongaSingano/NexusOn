import {
  Compass,
  Lightbulb,
  GraduationCap,
  Rocket,
  UsersRound,
  Globe2,
} from "lucide-react";

const benefits = [
  [Compass, "Orientação", "Sabe por onde começar e quais os próximos passos."],
  [Lightbulb, "Ideias e temas", "Encontra ideias, temas e caminhos para o teu projeto."],
  [GraduationCap, "TCC & Investigação", "Apoio na definição, estruturação e desenvolvimento."],
  [Rocket, "Projetos", "Transforma uma ideia num projeto estruturado e real."],
  [UsersRound, "Mentoria", "Recebe acompanhamento durante a evolução do projeto."],
  [Globe2, "Oportunidades", "Descobre oportunidades e conecta-te com novas comunidades."],
] as const;

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Benefícios
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tudo para te ajudar a avançar.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Orientação, conhecimento, desenvolvimento e oportunidades
            num único lugar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([Icon, title, description]) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}