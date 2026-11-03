import { useEffect, useState } from 'react'
import { person } from '../../data/portfolio'
import { ArrowDown, Mail, GraduationCap, Calendar, MapPin, Code2 } from 'lucide-react'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const show = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  })

  const quickFacts = [
    { label: 'Universidad', value: 'UNMSM (FISI)', icon: <GraduationCap size={18} /> },
    { label: 'Ciclo actual', value: '8.° ciclo', icon: <Calendar size={18} /> },
    { label: 'Ubicación', value: 'Lima, Perú', icon: <MapPin size={18} /> },
    { label: 'Especialidad', value: 'Desarrollo Web Full-Stack', icon: <Code2 size={18} /> },
  ]

  return (
    <section
      id="about"
      aria-label="Presentación y sobre mí"
      style={{
        minHeight: '92svh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '7.5rem 1.5rem 5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Anchor for top navigation */}
      <span id="top" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />

      {/* Main Headline */}
      <h1
        style={{
          ...show(80),
          fontSize: 'clamp(2.7rem, 6.5vw, 5.8rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.035em',
          color: 'var(--text)',
          marginBottom: '1.25rem',
          maxWidth: '15ch',
        }}
      >
        {person.name}
        <span style={{ color: 'var(--accent)' }}></span>
      </h1>

      {/* Role / Subtitle */}
      <p
        style={{
          ...show(160),
          fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
          color: 'var(--accent)',
          marginBottom: '1.75rem',
          fontWeight: 500,
          letterSpacing: '-0.01em',
        }}
      >
        Desarrollador Full-Stack · Estudiante de Ingeniería de Software
      </p>

      {/* Narrative Bio */}
      <div
        style={{
          ...show(240),
          maxWidth: '68ch',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        <p
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.08rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          Me especializo en el desarrollo de aplicaciones web integrales, conectando el diseño relacional de bases de datos y arquitecturas backend con interfaces limpias, funcionales y accesibles.
        </p>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.02rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          He colaborado activamente en proyectos de software que involucran pasarelas de pago, consumo de modelos de inteligencia artificial y flujos de trabajo en equipo. Actualmente estoy finalizando el 8.° ciclo en la <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Universidad Nacional Mayor de San Marcos</strong> y ampliando mis conocimientos en <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Docker y AWS</strong>.
        </p>
      </div>

      {/* Quick Facts Grid with Clear High-Contrast Subtitles */}
      <div
        style={{
          ...show(320),
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2.75rem',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem 0',
        }}
      >
        {quickFacts.map(({ label, value, icon }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              {icon}
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.74rem',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '0.15rem',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text)',
                  fontWeight: 500,
                }}
              >
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons / CTAs */}
      <div style={{ ...show(400), display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a
          href="#projects"
          style={{
            background: 'var(--accent)',
            color: '#080808',
            textDecoration: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.6rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Ver proyectos
          <ArrowDown size={15} />
        </a>

        <a
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--text)',
            textDecoration: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.6rem',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            background: 'var(--surface)',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.background = 'var(--surface-2)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.background = 'var(--surface)'
          }}
        >
          <GithubIcon size={16} />
          GitHub
        </a>

        <a
          href="#contact"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            borderRadius: '8px',
            padding: '0.75rem 1.4rem',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          <Mail size={15} />
          Contactar
        </a>
      </div>
    </section>
  )
}
