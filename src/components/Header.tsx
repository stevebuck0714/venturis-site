import Link from 'next/link'
import './header.css'

export function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          Venturis
        </Link>
        
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 