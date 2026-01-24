import { useCallback, useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import Work from './Work'
import Contact from './Contact'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState(0)
  const ticking = useRef(false)

  const scrollToSection = useCallback((index: number) => {
    const element = document.getElementById(sections[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight

        if (scrollPosition + windowHeight >= documentHeight - 100) {
          setActiveSection(2)
        } else {
          sections.forEach((section, index) => {
            const element = document.getElementById(section.id)
            if (element) {
              const offsetTop = element.offsetTop
              const offsetBottom = offsetTop + element.offsetHeight

              if (
                scrollPosition + windowHeight / 2 >= offsetTop &&
                scrollPosition + windowHeight / 2 < offsetBottom
              ) {
                setActiveSection(index)
              }
            }
          })
        }

        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav-indicators">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`nav-indicator ${activeSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to ${section.label} section`}
          >
            <span className="nav-line"></span>
            <span className="nav-label">{section.label}</span>
          </button>
        ))}
      </nav>

      {/* Components */}
      <Hero />
      <Work />
      <Contact />
    </div>
  )
}

export default LandingPage
