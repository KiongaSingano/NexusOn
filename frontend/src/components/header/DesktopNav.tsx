const navItems = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre nós",
    href: "#sobre",
  },
  {
    label: "Como funciona",
    href: "#como-funciona",
  },
];

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}