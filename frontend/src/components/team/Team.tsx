import {
  ArrowUpRight,
  Building2,
  Handshake,
  Mail,
  Users,
} from "lucide-react";

import madalenaPhoto from "../../assets/team/Madalena.jpeg";
import zacariasPhoto from "../../assets/team/Zacarias.png";

const team = [
  {
    name: "Madalena Ferreira",
    role: "Comunicação & Representação",
    education: "Estudante de Língua Portuguesa",
    description:
      "Responsável pela comunicação e representação do projeto, contribuindo para a ligação entre a NexusOn, utilizadores e parceiros.",
    image: madalenaPhoto,
    position: "center 55%",
    tags: ["Comunicação", "Representação"],
  },
  {
    name: "Zacarias Singano",
    role: "Tecnologia & Gestão",
    education: "Estudante de Ciências da Computação",
    description:
      "Responsável pelo desenvolvimento tecnológico, programação, design e gestão dos projetos da NexusOn.",
    image: zacariasPhoto,
    position: "center 55%",
    tags: ["Desenvolvimento", "Programação", "Design", "Gestão"],
  },
];

export default function Team() {
  const contactPartner = () => {
    const message = encodeURIComponent(
      "Olá! Tenho interesse em ser parceiro da NexusOn. Gostaria de saber mais sobre as oportunidades de parceria."
    );

    window.open(
      `https://wa.me/244946614043?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const contactMember = (name: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de entrar em contacto com ${name} através da NexusOn.`
    );

    window.open(
      `https://wa.me/244946614043?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="equipa"
      className="relative overflow-hidden bg-slate-50 pt-3 pb-10 sm:pt-5 sm:pb-14"
    >
      {/* DECORAÇÃO DE FUNDO */}

      <div className="pointer-events-none absolute -left-32 top-10 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ========================= */}
        {/* CABEÇALHO */}
        {/* ========================= */}

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            A nossa{" "}
            <span className="text-blue-600">equipa</span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:mt-3 sm:text-base sm:leading-6">
            Pessoas com diferentes competências, unidas pela mesma visão:
            transformar ideias, conhecimento e colaboração em projetos reais.
          </p>

        </div>

        {/* ========================= */}
        {/* CARDS */}
        {/* ========================= */}

        <div className="mx-auto mt-6 grid max-w-5xl items-stretch gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

          {/* ================================= */}
          {/* MEMBROS DA EQUIPA */}
          {/* ================================= */}

          {team.map((member) => (
            <article
              key={member.name}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 sm:rounded-2xl"
            >

              {/* FOTO */}

              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-200">

                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  loading="lazy"
                  style={{
                    objectPosition: member.position,
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* GRADIENTE */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                {/* BOTÃO CONTACTAR */}

                <button
                  type="button"
                  onClick={() => contactMember(member.name)}
                  aria-label={`Contactar ${member.name}`}
                  className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white hover:text-blue-600 sm:right-3 sm:top-3 sm:h-8 sm:w-8"
                >
                  <Mail
                    size={12}
                    className="sm:h-3.5 sm:w-3.5"
                  />
                </button>

                {/* NOME */}

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">

                  <p className="text-[8px] font-bold uppercase tracking-wider text-blue-300 sm:text-[10px]">
                    {member.role}
                  </p>

                  <h3 className="mt-0.5 text-base font-bold text-white sm:mt-1 sm:text-xl">
                    {member.name}
                  </h3>

                </div>

              </div>

              {/* ========================= */}
              {/* CONTEÚDO */}
              {/* ========================= */}

              <div className="flex flex-1 flex-col p-3 sm:p-4">

              

                <p className="mt-1.5 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
                  {member.description}
                </p>

                {/* TAGS */}

                <div className="mt-2.5 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">

                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[8px] font-medium text-slate-500 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 sm:px-2.5 sm:py-1 sm:text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

          {/* ================================= */}
          {/* CARD PARCEIROS */}
          {/* ================================= */}

          <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 sm:rounded-2xl">

            {/* ÁREA VISUAL */}

            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">

              {/* DECORAÇÕES */}

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 sm:h-40 sm:w-40" />

              <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-white/10 sm:h-40 sm:w-40" />

              {/* ÍCONE PRINCIPAL */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20 sm:rounded-3xl">

                  <Handshake
                    size={30}
                    strokeWidth={1.6}
                    className="sm:h-[38px] sm:w-[38px]"
                  />

                </div>

              </div>

              {/* ÍCONES SECUNDÁRIOS */}

              <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur sm:left-5 sm:top-5 sm:h-9 sm:w-9 sm:rounded-xl">

                <Building2
                  size={14}
                  className="sm:h-[17px] sm:w-[17px]"
                />

              </div>

              <div className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur sm:bottom-5 sm:right-5 sm:h-9 sm:w-9 sm:rounded-xl">

                <Users
                  size={14}
                  className="sm:h-[17px] sm:w-[17px]"
                />

              </div>

            </div>

            {/* ========================= */}
            {/* CONTEÚDO PARCEIROS */}
            {/* ========================= */}

            <div className="flex flex-1 flex-col p-3 sm:p-4">

              <p className="text-[8px] font-bold uppercase tracking-wider text-blue-600 sm:text-[10px]">
                Parceiros
              </p>

              <h3 className="mt-0.5 text-base font-bold text-slate-900 sm:mt-1 sm:text-lg">
                Crescemos com quem acredita
              </h3>

              <p className="mt-1.5 text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">
                A NexusOn está aberta à colaboração com instituições,
                empresas, mentores e organizações que queiram contribuir
                para o desenvolvimento de ideias e projetos.
              </p>

              {/* CTA */}

              <div className="mt-auto pt-3 sm:pt-4">

                <button
                  type="button"
                  onClick={contactPartner}
                  className="group/partner flex w-full items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-semibold text-blue-700 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white active:scale-[0.98] sm:rounded-xl sm:py-2.5 sm:text-xs"
                >

                  <span>
                    Quero ser parceiro
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover/partner:translate-x-0.5 group-hover/partner:-translate-y-0.5 sm:h-[15px] sm:w-[15px]"
                  />

                </button>

              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}