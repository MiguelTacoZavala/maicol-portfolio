import { FadeIn } from '../ui/FadeIn'
import { techStack } from '../../data/portfolio'
import { Layout, Server, Database, Wrench, Sparkles } from 'lucide-react'

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Layout size={16} />,
  Backend: <Server size={16} />,
  'Bases de datos': <Database size={16} />,
  Herramientas: <Wrench size={16} />,
  Aprendiendo: <Sparkles size={16} />,
}

export function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '7rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <h2
            id="stack-heading"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '0.5rem',
            }}
          >
            Stack técnico
          </h2>
          <div
            style={{ width: '2rem', height: '2px', background: 'var(--accent)', margin: '1rem 0 3.5rem' }}
            aria-hidden="true"
          />
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {techStack.map((group, i) => (
            <FadeIn key={group.label} delay={i * 60}>
              <div
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.6rem',
                  background: 'var(--bg)',
                  transition: 'border-color 0.2s, transform 0.2s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '1.25rem',
                    color: group.label === 'Aprendiendo' ? 'var(--accent)' : 'var(--text)',
                  }}
                >
                  <span style={{ color: group.label === 'Aprendiendo' ? 'var(--accent)' : 'var(--accent)' }}>
                    {categoryIcons[group.label] ?? <Layout size={16} />}
                  </span>
                  <h3
                    style={{
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.09em',
                      fontWeight: 650,
                      color: group.label === 'Aprendiendo' ? 'var(--accent)' : 'var(--text)',
                      margin: 0,
                    }}
                  >
                    {group.label}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', margin: 0, padding: 0 }}>
                  {group.items.map(item => (
                    <li
                      key={item}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: group.label === 'Aprendiendo' ? 'var(--accent)' : 'var(--text-subtle)',
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
