import React, { useEffect } from "react"
import "./App.css"
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Method from './components/Method'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  useEffect(() => {
    const font1 = document.createElement("link")
    font1.rel = "stylesheet"
    font1.href = "https://fonts.googleapis.com/css2?family=Libertinus+Mono&display=swap"
    document.head.appendChild(font1)

    const font2 = document.createElement("link")
    font2.rel = "stylesheet"
    font2.href = "https://fonts.googleapis.com/css2?family=Seymour+One&display=swap"
    document.head.appendChild(font2)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Method />
      <Footer />
    </>
  )
}
export default App