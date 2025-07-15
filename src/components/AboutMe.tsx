import React, { useRef, useEffect, useState } from 'react'
import img1 from '../assets/sobremi01.jpg'
import img2 from '../assets/sobremi02.jpg'
import img3 from '../assets/sobremi03.png'

function useFadeIn() {
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
    return [ref, visible] as const
}

export default function AboutMe() {
    const [ref, visible] = useFadeIn()
    return (
        <section
            id="aboutme"
            className="w-full py-16"
            style={{
                background: 'linear-gradient(135deg, #f8f6f0 0%, #ede9fe 100%)',
                fontFamily: "'Libertinus Mono', monospace",
            }}
        >
            <div
                ref={ref}
                className={`max-w-6xl mx-auto flex flex-col gap-10 px-4 transition-all duration-1000 ease-out ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <h2
                    className="text-2xl md:text-4xl font-bold text-purple-700 mb-10 text-center"
                    style={{ fontFamily: "'Seymour One', sans-serif" }}
                >
                    Sobre mí...
                </h2>
                {/* Bloque 1: imagen izquierda, texto derecha */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img
                        src={img1}
                        alt="Jhosselin estudiante"
                        className="w-96 h-56 object-cover rounded-2xl shadow-xl border-8 border-purple-200"
                    />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-purple-600 mb-2">Mi Vocación</h3>
                        <p className="text-base text-gray-700 text-center md:text-left">
                            Soy estudiante de Psicología, apasionada por comprender la mente humana y acompañar con empatía los procesos de quienes buscan sanar, entenderse o simplemente ser escuchados. Me mueven las emociones profundas, las historias que duelen y las preguntas que transforman. Creo en una Psicología cercana, ética y humana, donde el conocimiento se une con la sensibilidad para generar cambios reales. Me estoy formando con compromiso, aprendiendo a escuchar sin juzgar y a estar presente con respeto y ternura. Aspiro a ser guía, no salvadora; puente, no destino. Porque cada persona es un mundo, y yo elegí caminar junto a ellos, no por ellos.
                        </p>
                    </div>
                </div>
                {/* Bloque 2: texto izquierda, imagen derecha */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                    <img
                        src={img2}
                        alt="Jhosselin profesional"
                        className="w-96 h-56 object-cover rounded-2xl shadow-xl border-8 border-purple-200"
                    />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-purple-600 mb-2">Mi Enfoque</h3>
                        <p className="text-base text-gray-700 text-center md:text-left">
                            Me intereso especialmente por la Psicología Forense, así como por los enfoques Gestalt y Sistémico, desde los cuales comprendo al ser humano como un todo en constante interacción con su entorno. Me atrae el estudio de los procesos emocionales vinculados a la ansiedad y la depresión, y me motiva el desafío de intervenir en casos complejos con mirada crítica, ética y respetuosa. Busco formarme sólidamente en estas áreas, integrando la técnica con la sensibilidad, para aportar desde la prevención, la contención y la comprensión profunda de cada historia. Veo en cada caso una oportunidad para aprender, crecer y servir con humanidad.
                        </p>
                    </div>
                </div>
                {/* Bloque 3: imagen izquierda, texto derecha */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img
                        src={img3}
                        alt="Jhosselin consultorio"
                        className="w-56 h-76 object-cover rounded-2xl shadow-xl border-8 border-purple-200"
                    />
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-purple-600 mb-2">Valores y Compromiso</h3>
                        <div className="text-base text-gray-700 text-center md:text-left space-y-2">
                            <blockquote className="italic text-purple-600 border-l-4 border-purple-300 pl-4">
                                "Cada proceso terapéutico es único, y juntos podemos descubrir tu mejor versión."
                            </blockquote>
                            <ul className="list-disc list-inside text-left">
                                <li>Empatía y escucha activa</li>
                                <li>Respeto y confidencialidad</li>
                                <li>Compromiso con tu bienestar</li>
                                <li>Actualización constante en técnicas psicológicas</li>
                            </ul>
                            {/* Nube de palabras */}
                            <div className="flex flex-wrap justify-center gap-2 mt-4">
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold shadow">Empatía</span>
                                <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm font-semibold shadow">Escucha</span>
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold shadow">Respeto</span>
                                <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm font-semibold shadow">Confidencialidad</span>
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold shadow">Compromiso</span>
                                <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm font-semibold shadow">Humanidad</span>
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold shadow">Sensibilidad</span>
                                <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm font-semibold shadow">Ética</span>
                                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold shadow">Ternura</span>
                                <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm font-semibold shadow">Presencia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
