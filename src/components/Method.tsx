import { useRef, useEffect, useState } from 'react'
import { FaUserCheck, FaBullseye, FaChartLine, FaHandshake } from 'react-icons/fa'

export default function Method() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
        id="method"
      className="w-full py-16"
      style={{
        background: 'radial-gradient(circle at 20% 40%, #e0e7ff 0%, #f8f6f0 100%)',
        fontFamily: "'Libertinus Mono', monospace"
      }}
    >
      <h2
        className="text-2xl md:text-4xl font-bold text-purple-700 mb-10 text-center drop-shadow"
        style={{ fontFamily: "'Seymour One', sans-serif" }}
      >
        Mi forma de trabajar
      </h2>
      <div
        ref={ref}
        className={`max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center px-4 transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex-1 bg-white/80 rounded-3xl shadow-2xl p-8 mb-8 border-2 border-purple-100">
          <p className="text-base md:text-lg text-gray-700 text-center mb-8">
            <span className="font-semibold text-purple-700">Psicología Forense</span>, <span className="font-semibold text-purple-700">Gestalt</span> y <span className="font-semibold text-purple-700">Sistémico</span> son mis enfoques principales. Comprendo al ser humano como un todo en constante interacción con su entorno. Me motiva intervenir en casos complejos con mirada crítica, ética y respetuosa, integrando técnica y sensibilidad para aportar desde la prevención, la contención y la comprensión profunda de cada historia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-center bg-purple-50 rounded-xl p-6 shadow hover:scale-105 transition">
              <FaUserCheck className="text-3xl text-purple-600 mb-2" />
              <span className="font-bold text-purple-700 mb-1">Evaluación inicial</span>
              <span className="text-gray-700 text-sm text-center">Nos conocemos, identificamos tus necesidades y establecemos un espacio seguro para tu proceso.</span>
            </div>
            <div className="flex flex-col items-center bg-purple-50 rounded-xl p-6 shadow hover:scale-105 transition">
              <FaBullseye className="text-3xl text-purple-600 mb-2" />
              <span className="font-bold text-purple-700 mb-1">Definición de objetivos</span>
              <span className="text-gray-700 text-sm text-center">Juntos trazamos metas claras y alcanzables para tu proceso terapéutico.</span>
            </div>
            <div className="flex flex-col items-center bg-purple-50 rounded-xl p-6 shadow hover:scale-105 transition">
              <FaChartLine className="text-3xl text-purple-600 mb-2" />
              <span className="font-bold text-purple-700 mb-1">Intervención y acompañamiento</span>
              <span className="text-gray-700 text-sm text-center">Aplicamos técnicas y herramientas adaptadas a tu situación, con seguimiento constante.</span>
            </div>
            <div className="flex flex-col items-center bg-purple-50 rounded-xl p-6 shadow hover:scale-105 transition">
              <FaHandshake className="text-3xl text-purple-600 mb-2" />
              <span className="font-bold text-purple-700 mb-1">Cierre y retroalimentación</span>
              <span className="text-gray-700 text-sm text-center">Evaluamos avances, resolvemos dudas y fortalecemos tu autonomía emocional.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}