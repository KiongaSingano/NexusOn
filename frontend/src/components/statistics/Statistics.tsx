import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Rocket,
  Puzzle,
  GraduationCap,
  UsersRound,
} from "lucide-react";

const statistics = [
  ["Ideias", 3, Lightbulb],
  ["Projetos", 0, Rocket],
  ["Soluções", 0, Puzzle],
  ["Mentorias", 0, UsersRound],
  ["Estudantes", 0, GraduationCap],
] as const;

function AnimatedNumber({
  value,
  active,
}: {
  value: number;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (value === 0) {
      setCount(0);
      return;
    }

    const start = performance.now();
    const duration = 1000;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [active, value]);

  return <>{count}</>;
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-slate-100 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            NexusOn em movimento
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ideias que começam a ganhar forma.
          </h2>
        </div>

        <div className="grid grid-cols-2 rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-3 lg:grid-cols-5">
          {statistics.map(([label, value, Icon], index) => (
            <div
              key={label}
              className={`
                relative flex flex-col items-center px-4 py-7 text-center
                transition-all duration-500
                ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {index > 0 && (
                <span className="absolute left-0 top-1/2 hidden h-10 -translate-y-1/2 border-l border-slate-200 lg:block" />
              )}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={19} strokeWidth={1.8} />
              </div>

              <div className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                <AnimatedNumber value={value} active={visible} />
                {value > 0 && <span className="text-blue-600">+</span>}
              </div>

              <span className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Números atualizados à medida que o ecossistema cresce.
        </p>

      </div>
    </section>
  );
}