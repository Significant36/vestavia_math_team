'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#team-info" onClick={(e) => scrollToSection(e, '#team-info')}>Team Info</a></li>
          <li><a href="#tournament-registration" onClick={(e) => scrollToSection(e, '#tournament-registration')}>Tournament Registration</a></li>
          <li><a href="#schedule" onClick={(e) => scrollToSection(e, '#schedule')}> Schedule</a></li>
          <li><a href="#resources" onClick={(e) => scrollToSection(e, '#resources')}>Resources</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <button className="mobile-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  )
}