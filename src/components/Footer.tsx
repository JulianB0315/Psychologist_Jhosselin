import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      className="w-full py-10 bg-gradient-to-r from-purple-50 via-gray-100 to-orange-50 border-t border-purple-200"
      style={{ fontFamily: "'Libertinus Mono', monospace" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Info principal */}
        <div className="flex flex-col items-start">
          <span className="text-xl md:text-2xl font-bold text-purple-700 mb-2" style={{ fontFamily: "'Seymour One', sans-serif" }}>
            Jhosselin - Psicóloga
          </span>
          <span className="text-gray-700 text-sm mb-1">
            Colegiatura/Licencia profesional: <span className="font-semibold">N° XXXXXXX</span>
          </span>
          <span className="text-gray-700 text-sm mb-1">
            WhatsApp: <a href="https://wa.me/51981429888" className="text-purple-700 font-semibold hover:underline">+51 981 429 888</a>
          </span>
          <span className="text-gray-700 text-sm mb-1">
            Dirección: <span className="font-semibold">Av. Ejemplo 123, Chiclayo, Perú</span>
          </span>
          <span className="text-gray-700 text-sm mb-1">
            Email: <a href="mailto:jhosselin.psicologa@email.com" className="text-purple-700 font-semibold hover:underline">jhosselin.psicologa@email.com</a>
          </span>
          <div className="flex gap-2 mt-2">
            <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Atención presencial</span>
            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">Atención online</span>
          </div>
        </div>
        {/* Redes y copyright */}
        <div className="flex flex-col items-end">
          <div className="flex gap-5 mb-2">
            <a href="https://www.instagram.com/_aimemtp/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-2xl transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/nae.gs26" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl transition" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@_aimemtp" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 text-2xl transition" aria-label="TikTok">
              <svg width="1em" height="1em" viewBox="0 0 32 32" fill="currentColor">
                <path d="M20.5 4v17.5a4.5 4.5 0 11-4.5-4.5h2V14h-2a6.5 6.5 0 106.5 6.5V8.5a7.5 7.5 0 003.5 1V4a7.5 7.5 0 01-5.5-2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl transition" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-gray-700">Horario: Lun-Vie 9am-8pm | Sáb 9am-1pm</span>
            <span className="text-xs text-gray-700">Idiomas: Español, Inglés</span>
            <span className="text-xs text-gray-700">Especialidad: Psicología Forense, Gestalt, Sistémico</span>
          </div>
          <span className="text-gray-500 text-xs mt-2 text-right">
            © {new Date().getFullYear()} Jhosselin. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
