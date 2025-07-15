import React, { useRef, useEffect, useState } from 'react'
import { FaRegSmileBeam, FaHeartBroken, FaBrain, FaRegGrinStars, FaRegSadCry, FaBaby } from 'react-icons/fa'

const services = [
  {
    icon: <FaBrain className="text-3xl text-blue-600" />,
    title: "Ansiedad",
    desc: "Te ayudo a gestionar y comprender la ansiedad para recuperar tu tranquilidad."
  },
  {
    icon: <FaRegSadCry className="text-3xl text-blue-600" />,
    title: "Depresión",
    desc: "Acompañamiento profesional para superar momentos difíciles y encontrar esperanza."
  },
  {
    icon: <FaRegGrinStars className="text-3xl text-blue-600" />,
    title: "Autoestima",
    desc: "Fortalece tu autoconcepto y aprende a valorarte en cada etapa de tu vida."
  },
  {
    icon: <FaBaby className="text-3xl text-blue-600" />,
    title: "Estimulación temprana",
    desc: "Apoyo en el desarrollo integral de los más pequeños, potenciando sus habilidades desde la infancia."
  },
  {
    icon: <FaHeartBroken className="text-3xl text-blue-600" />,
    title: "Duelos",
    desc: "Acompañamiento en procesos de pérdida para transitar el duelo de manera saludable."
  },
  {
    icon: <FaRegSmileBeam className="text-3xl text-blue-600" />,
    title: "Otros procesos",
    desc: "Consulta por otros temas emocionales y psicológicos que te preocupen."
  }
]

export default function Services() {
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
        id="services"
      className="w-full py-16"
      style={{
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
        fontFamily: "'Libertinus Mono', monospace"
      }}
    >
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2
          className="text-2xl md:text-4xl font-bold text-blue-700 mb-10 text-center"
          style={{ fontFamily: "'Seymour One', sans-serif" }}
        >
          ¿En qué te puedo ayudar?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {services.map((serv, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-xl transition">
              <div className="mb-4">{serv.icon}</div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">{serv.title}</h3>
              <p className="text-base text-gray-600">{serv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
