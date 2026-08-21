import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Rocket,
  Puzzle,
  GraduationCap,
  UsersRound,
} from "lucide-react";

interface Statistic {
  label: string;
  value: number;
  icon: typeof Lightbulb;
}

const statistics: Statistic[] = [
  {
    label: "Ideias",
    value: 3,
    icon: Lightbulb,
  },
  {
    label: "Projetos",
    value: 0,
    icon: Rocket,
  },
  {
    label: "Soluções",
    value: 0,
    icon: Puzzle,
  },
  {
    label: "Mentorias",
    value: 0,
    icon: UsersRound,
  },
  {
    label: "Estudantes",
    value: 0,
    icon: GraduationCap,
  },
];

function AnimatedNumber({
  value,
  start,
}: {
  value: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (value === 0) {
      setCount(0);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * value),
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return <>{count}</>;
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

return (
  <section
    ref={sectionRef}
    className="relative overflow-hidden bg-slate-50"
  >
    {/* Elementos decorativos */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-indigo-100/30 blur-3xl" />
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

      {/* Título */}
      <div className="mb-8 text-center sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          O ecossistema NexusOn
        </p>

        <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Onde ideias começam a ganhar forma.
        </h2>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

        {statistics.map((statistic, index) => {
          const Icon = statistic.icon;

          return (
            <div
              key={statistic.label}
              className={`
                relative flex flex-col items-center
                justify-center py-3 text-center
                transition-all duration-700
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Separador */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-12 -translate-y-1/2 border-l border-slate-200 lg:block" />
              )}

              {/* Ícone */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              {/* Número */}
              <div className="mt-3 text-2xl font-bold leading-none tracking-tight text-slate-900 sm:text-3xl">
                <AnimatedNumber
                  value={statistic.value}
                  start={isVisible}
                />

                {statistic.value > 0 && (
                  <span className="text-blue-600">+</span>
                )}
              </div>

              {/* Label */}
              <p className="mt-1.5 text-xs font-medium text-slate-500 sm:text-sm">
                {statistic.label}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  </section>
);
}