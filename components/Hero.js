'use client'

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Vestavia Hills Math Team</h1>
        <p>Established in 1975</p>
        <div className="cta-buttons">
          <a href="#team-info" className="cta-btn" onClick={(e) => scrollToSection(e, '#team-info')}>
            Learn More
          </a>
          <a href="#tournament-registration" className="cta-btn secondary" onClick={(e) => scrollToSection(e, '#tournament-registration')}>
            Register for Tournament
          </a>
        </div>
      </div>
    </section>
  )
}
