import { useState, useEffect } from 'react'
import { person } from '../../data/portfolio'
import { Menu, X, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#projects' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'rgba(8,8,8,0.7)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          style={{
            color: 'var(--text)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          MT<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Navigation (strictly hidden on mobile, flex on desktop) */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact CTA (no duplicate 'Contacto' link) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            style={{
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.45rem 1.1rem',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'var(--text)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'var(--surface)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.background = 'var(--accent-dim)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            <Mail size={14} style={{ color: 'var(--accent)' }} />
            Contactar
          </a>
        </div>

        {/* Mobile Hamburger Toggle (strictly flex on mobile, hidden on desktop) */}
        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          className="flex md:hidden items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0.5rem',
            cursor: 'pointer',
            color: 'var(--text)',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'var(--surface)',
            borderTop: '1px solid var(--border)',
            padding: '1.25rem 1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--text)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.4rem 0',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'var(--accent)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            <Mail size={16} />
            Contactar
          </a>
        </div>
      )}
    </header>
  )
}
