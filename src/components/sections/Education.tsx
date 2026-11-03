import { FadeIn } from '../ui/FadeIn'
import { education } from '../../data/portfolio'

export function Education() {
  const degrees = education.filter(e => e.type === 'degree')
  const certs = education.filter(e => e.type === 'cert')

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '7rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <h2
            id="education-heading"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '0.5rem',
            }}
          >
            Formación
          </h2>
          <div style={{ width: '2rem', height: '2px', background: 'var(--accent)', margin: '1rem 0 3.5rem' }} aria-hidden="true" />
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {/* Academic */}
          <div>
            <FadeIn>
              <h3 style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)', marginBottom: '1.5rem' }}>
                Educación
              </h3>
            </FadeIn>
            {degrees.map((item, i) => (
              <FadeIn key={item.degree} delay={i * 60}>
                <div
                  style={{
                    borderLeft: '1px solid var(--border)',
                    paddingLeft: '1.25rem',
                    paddingBottom: '2rem',
                    position: 'relative',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-4px',
                      top: '4px',
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '0.35rem' }}>
                    {item.period}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text)', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '0.2rem' }}>
                    {item.degree}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{item.institution}</p>
                  {item.detail && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', marginTop: '0.25rem' }}>{item.detail}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <FadeIn delay={80}>
              <h3 style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-subtle)', marginBottom: '1.5rem' }}>
                Certificaciones
              </h3>
            </FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certs.map((item, i) => (
                <FadeIn key={item.degree} delay={80 + i * 60}>
                  <div
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      padding: '1.25rem 1.5rem',
                      background: 'var(--bg)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500, letterSpacing: '-0.01em', marginBottom: '0.2rem' }}>
                        {item.degree}
                      </p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.institution}</p>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', flexShrink: 0 }}>{item.period}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

