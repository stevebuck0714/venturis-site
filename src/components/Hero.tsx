import Link from 'next/link'
import './hero.css'

export function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">
        Welcome to <span className="highlight">Venturis</span>
      </h1>
      <p className="hero-description">
        Empowering businesses with innovative solutions and strategic guidance for sustainable growth and success.
      </p>
      <div className="hero-buttons">
        <Link
          href="/contact"
          className="button button-primary"
        >
          Get Started
        </Link>
        <Link
          href="/services"
          className="button button-secondary"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
} 