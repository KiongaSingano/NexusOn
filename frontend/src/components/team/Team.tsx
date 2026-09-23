import {
  ArrowUpRight,
  Building2,
  Handshake,
  Mail,
  UsersRound,
} from "lucide-react";

import madalenaPhoto from "../../assets/team/Madalena.jpeg";
import zacariasPhoto from "../../assets/team/Zacarias.png";

const team = [
  {
    name: "Madalena Ferreira",
    role: "Comunicação & Marketing",
    education: "Estudante de Língua Portuguesa",
    description:
      "Responsável pela comunicação, representação e ligação do NexusOn com utilizadores e parceiros.",
    image: madalenaPhoto,
    position: "center 55%",
    tags: ["Comunicação", "Representação"],
  },
  {
    name: "Zacarias Singano",
    role: "Tecnologia & Gestão",
    education: "Estudante de Ciências da Computação",
    description:
      "Responsável pela tecnologia, programação, design e gestão dos projetos do NexusOn.",
    image: zacariasPhoto,
    position: "center 55%",
    tags: ["Tecnologia", "Programação", "Gestão"],
  },
];

const whatsapp = (message: string) => {
  window.open(
    `https://wa.me/244946614043?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
};

export default function Team() {
  return (
    <section id="equipa" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            A equipa
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Pessoas por trás do NexusOn.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Diferentes competências, uma mesma visão: transformar
            ideias e conhecimento em projetos reais.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  loading="lazy"
                  style={{ objectPosition: member.position }}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                <button
                  type="button"
                  aria-label={`Contactar ${member.name}`}
                  onClick={() =>
                    whatsapp(
                      `Olá! Gostaria de entrar em contacto com ${member.name} através do NexusOn.`,
                    )
                  }
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-blue-600"
                >
                  <Mail size={14} />
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                    {member.role}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    {member.name}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-medium text-slate-400">
                  {member.education}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {member.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500 transition group-hover:bg-blue-50 group-hover:text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">

            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/10" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md transition duration-500 group-hover:scale-110">
                <Handshake size={36} strokeWidth={1.6} />
              </div>

              <Building2
                size={18}
                className="absolute left-5 top-5 text-white/70"
              />

              <UsersRound
                size={18}
                className="absolute bottom-5 right-5 text-white/70"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Parcerias
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Crescemos com quem acredita.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Estamos abertos à colaboração com instituições,
                empresas, mentores e organizações que queiram
                contribuir para o desenvolvimento de ideias e projetos.
              </p>

              <button
                type="button"
                onClick={() =>
                  whatsapp(
                    "Olá! Tenho interesse em ser parceiro do NexusOn. Gostaria de saber mais sobre as oportunidades de parceria.",
                  )
                }
                className="mt-6 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                Quero ser parceiro
                <ArrowUpRight size={16} />
              </button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}