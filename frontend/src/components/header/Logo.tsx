export default function Logo() {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-2.5"
      aria-label="NexusOn"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
        <span className="text-lg font-extrabold text-white">
          N
        </span>
      </div>

      <span className="text-xl font-bold tracking-tight text-slate-950">
        Nexus<span className="text-blue-600">On</span>
      </span>
    </a>
  );
}