export default function Navbar() {
  return (
    <nav
      className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm"
      style={{ fontFamily: "'Libertinus Mono', monospace" }}
      role="navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-xl font-bold text-purple-700" style={{ fontFamily: "'Seymour One', sans-serif" }}>
          Jhosselin Psicóloga
        </span>
        <ul className="hidden md:flex gap-8 text-base font-semibold text-purple-700">
          <li><a href="#hero" className="hover:text-purple-900 transition" tabIndex={0}>Inicio</a></li>
          <li><a href="#aboutme" className="hover:text-purple-900 transition" tabIndex={0}>Sobre mí</a></li>
          <li><a href="#services" className="hover:text-purple-900 transition" tabIndex={0}>Servicios</a></li>
          <li><a href="#method" className="hover:text-purple-900 transition" tabIndex={0}>Método</a></li>
        </ul>
      </div>
    </nav>
  )
}


