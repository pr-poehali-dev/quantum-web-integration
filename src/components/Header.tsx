interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold uppercase tracking-widest">FORTIS</div>
        <nav className="flex gap-8">
          <a
            href="#services"
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-300 transition-colors duration-300 uppercase text-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
