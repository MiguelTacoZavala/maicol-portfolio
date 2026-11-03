import { FadeIn } from '../ui/FadeIn'
import { person } from '../../data/portfolio'
import { ArrowUpRight, Mail } from 'lucide-react'

// Official SVGs for brand fidelity
function GithubIcon({ size = 22 }: { size?: number }) {
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

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

const contactChannels = [
  {
    label: 'Email',
    value: person.email,
    href: `mailto:${person.email}`,
    icon: <Mail size={22} />,
  },
  {
    label: 'LinkedIn',
    value: 'migueltaco23',
    href: person.linkedin,
    icon: <LinkedinIcon size={20} />,
  },
  {
    label: 'GitHub',
    value: 'MiguelTacoZavala',
    href: person.github,
    icon: <GithubIcon size={21} />,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '7rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <FadeIn>
        <h2
          id="contact-heading"
          style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}
        >
          Contacto
        </h2>
        <div
          style={{ width: '2rem', height: '2px', background: 'var(--accent)', margin: '1rem 0 3.5rem' }}
          aria-hidden="true"
        />
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {contactChannels.map(({ label, value, href, icon }, i) => (
          <FadeIn key={label} delay={i * 70}>
            <a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem',
                textDecoration: 'none',
                background: 'var(--surface)',
                transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'var(--accent-dim)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--surface)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--surface-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {icon}
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--text-subtle)' }} />
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '0.35rem',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text)',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    wordBreak: 'break-all',
                  }}
                >
                  {value}
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
