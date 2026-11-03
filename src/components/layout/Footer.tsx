import { person } from '../../data/portfolio'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 1.5rem',
        background: 'transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Brand */}
        <a
          href="#top"
          style={{
            color: 'var(--text)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          MT<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
          <FooterLink href={person.github} label="GitHub" />
          <FooterLink href={person.linkedin} label="LinkedIn" />
          <FooterLink href={`mailto:${person.email}`} label="Email" />
          <a
            href="#top"
            aria-label="Volver arriba"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.82rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Arriba <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        color: 'var(--text-muted)',
        textDecoration: 'none',
        fontSize: '0.82rem',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
    >
      {label}
    </a>
  )
}
