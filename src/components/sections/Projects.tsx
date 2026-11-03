import { FadeIn } from '../ui/FadeIn'
import { projects, type Project } from '../../data/portfolio'
import {
  ExternalLink as ExternalLinkIcon,
  ScanFace,
  WalletCards,
  Users,
} from 'lucide-react'

// Official GitHub SVG
function GithubIcon({ size = 15 }: { size?: number }) {
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

// ─── Real Project Logo & Visual Preview Config ──────────────────────────────
const projectMedia: Record<
  string,
  {
    imageSrc?: string
    imageAlt?: string
    fallbackIcon?: React.ReactNode
    gradient: string
    glowColor: string
    tag: string
    imageStyle?: React.CSSProperties
    tagStyle?: React.CSSProperties
  }
> = {
  movi: {
    imageSrc: '/projects/logo_MOVI.png',
    imageAlt: 'Logo oficial de MOVI',
    gradient: 'linear-gradient(135deg, #FBF9F6 0%, #ECE7DF 100%)',
    glowColor: 'transparent',
    tag: 'RESERVAS & PAGOS',
    imageStyle: {
      maxWidth: '85%',
      maxHeight: '150px',
      objectFit: 'contain',
      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.12))',
    },
    tagStyle: {
      color: '#262626',
      background: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
    },
  },
  'patitas-sanas': {
    imageSrc: '/projects/patitasSanas_logo.png',
    imageAlt: 'Logo oficial de Patitas Sanas',
    gradient: 'radial-gradient(circle at center, #0f3d28 0%, #04170f 100%)',
    glowColor: 'rgba(34, 197, 94, 0.22)',
    tag: 'CLÍNICA VETERINARIA',
    imageStyle: {
      maxWidth: '90%',
      maxHeight: '170px',
      objectFit: 'contain',
      filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5))',
    },
  },
  'marketing-crm': {
    imageSrc: '/projects/Marketing-CRM_logo.png',
    imageAlt: 'Logo oficial de Marketing CRM',
    gradient: 'radial-gradient(circle at center, #0f3261 0%, #051329 100%)',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    tag: 'EMAIL MARKETING',
    imageStyle: {
      maxWidth: '90%',
      maxHeight: '145px',
      objectFit: 'contain',
      transform: 'scale(1.75)',
      transformOrigin: 'center',
      filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5))',
    },
  },
  'asistencia-facial': {
    fallbackIcon: <ScanFace size={52} style={{ color: '#fde047' }} />,
    gradient: 'radial-gradient(circle at center, #382405 0%, #120b02 100%)',
    glowColor: 'rgba(234, 179, 8, 0.12)',
    tag: 'VISIÓN & IA',
  },
  'gestion-gastos': {
    fallbackIcon: <WalletCards size={52} style={{ color: '#5eead4' }} />,
    gradient: 'radial-gradient(circle at center, #0a3338 0%, #041416 100%)',
    glowColor: 'rgba(20, 184, 166, 0.12)',
    tag: 'FINANZAS',
  },
}

function ProjectPreview({ id, name }: { id: string; name: string }) {
  const media = projectMedia[id]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '260px',
        background: media?.gradient ?? 'var(--surface-2)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '1.5rem',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: media?.glowColor ?? 'rgba(255,255,255,0.05)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />

      {/* Render actual image logo if available */}
      {media?.imageSrc ? (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={media.imageSrc}
            alt={media.imageAlt ?? name}
            style={{
              maxWidth: '85%',
              maxHeight: '150px',
              objectFit: 'contain',
              ...media.imageStyle,
            }}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '80px',
            height: '80px',
            borderRadius: '18px',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          }}
        >
          {media?.fallbackIcon}
        </div>
      )}

      {/* Tag Badge */}
      {media?.tag && (
        <span
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            zIndex: 1,
            fontSize: '0.64rem',
            fontWeight: 650,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)',
            background: 'rgba(0,0,0,0.6)',
            padding: '0.22rem 0.65rem',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.12)',
            fontFamily: 'var(--font-mono)',
            ...media.tagStyle,
          }}
        >
          {media.tag}
        </span>
      )}
    </div>
  )
}

// ─── Featured Project Card ──────────────────────────────────────────────────

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 100}>
      <article
        style={{
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
          background: 'var(--surface)',
          transition: 'border-color 0.25s',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
      >
        {/* Card Header — Title + Colaborativo Badge */}
        <div
          style={{
            padding: '1.3rem 1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 500,
              padding: '0.22rem 0.7rem',
              borderRadius: '100px',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--surface-2)',
            }}
          >
            <Users size={13} style={{ color: 'var(--accent)' }} />
            Colaborativo
          </span>
        </div>

        {/* Card Body — Logo on Left, Details on Right */}
        <div
          className="grid grid-cols-1 md:grid-cols-[300px_1fr]"
          style={{ gap: 0 }}
        >
          {/* Left: Project Logo Preview */}
          <div
            style={{
              padding: '1.5rem',
              borderRight: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <ProjectPreview id={project.id} name={project.name} />
          </div>

          {/* Right: Content details */}
          <div
            style={{
              padding: '1.6rem 1.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.15rem',
            }}
          >
            {/* Short description */}
            <p
              style={{
                color: 'var(--text)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {project.shortDescription}
            </p>

            {/* High-Contrast Subtitle Rows */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                borderTop: '1px solid var(--border)',
                paddingTop: '0.95rem',
              }}
            >
              <DetailRow label="Problema que resuelve" text={project.problem} />
              <DetailRow label="Mi contribución técnica" text={project.role} />
            </div>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
              {project.tech.map(t => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.74rem',
                    padding: '0.22rem 0.58rem',
                    borderRadius: '5px',
                    background: 'var(--surface-2)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.4rem', flexWrap: 'wrap' }}>
              {project.demo && (
                <ExternalLink
                  href={project.demo}
                  label="Ver demo"
                  primary
                  icon={<ExternalLinkIcon size={14} />}
                />
              )}
              {project.repo && (
                <ExternalLink
                  href={project.repo}
                  label="Repositorio"
                  icon={<GithubIcon size={15} />}
                />
              )}
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

// ─── Secondary Project Card ─────────────────────────────────────────────────

function SecondaryCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 60}>
      <article
        style={{
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '1.6rem',
          background: 'var(--surface)',
          transition: 'border-color 0.2s',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.9rem',
          height: '100%',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: 650,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {project.name}
          </h4>
          <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Demo <ExternalLinkIcon size={12} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                GitHub <GithubIcon size={12} />
              </a>
            )}
          </div>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
          {project.shortDescription}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
          {project.tech.slice(0, 5).map(t => (
            <span
              key={t}
              style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                background: 'var(--surface-2)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  )
}

// ─── High-Contrast Subtitle Component ───────────────────────────────────────

function DetailRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <span
        style={{
          fontSize: '0.74rem',
          color: 'var(--accent)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          display: 'block',
          marginBottom: '0.25rem',
        }}
      >
        {label}
      </span>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
        {text}
      </p>
    </div>
  )
}

function ExternalLink({
  href,
  label,
  primary = false,
  icon,
}: {
  href: string
  label: string
  primary?: boolean
  icon?: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: '0.84rem',
        textDecoration: 'none',
        borderRadius: '7px',
        padding: '0.48rem 1rem',
        fontWeight: primary ? 600 : 500,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        transition: 'opacity 0.2s, border-color 0.2s, color 0.2s, background 0.2s',
        ...(primary
          ? { background: 'var(--accent)', color: '#080808', border: 'none' }
          : { border: '1px solid var(--border)', color: 'var(--text)', background: 'var(--surface-2)' }),
      }}
      onMouseEnter={e => {
        if (primary) e.currentTarget.style.opacity = '0.88'
        else {
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.color = 'var(--accent)'
        }
      }}
      onMouseLeave={e => {
        if (primary) e.currentTarget.style.opacity = '1'
        else {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.color = 'var(--text)'
        }
      }}
    >
      {icon}
      {label}
    </a>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Projects() {
  const featured = projects.filter(p => p.featured)
  const secondary = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '7rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <FadeIn>
        <h2
          id="projects-heading"
          style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}
        >
          Proyectos
        </h2>
        <div
          style={{ width: '2rem', height: '2px', background: 'var(--accent)', margin: '1rem 0 3.5rem' }}
          aria-hidden="true"
        />
      </FadeIn>

      {/* Featured Projects Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4.5rem' }}>
        {featured.map((p, i) => (
          <FeaturedCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {/* Secondary Projects Grid */}
      {secondary.length > 0 && (
        <>
          <FadeIn>
            <h3
              style={{
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              Otros proyectos
            </h3>
          </FadeIn>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {secondary.map((p, i) => (
              <SecondaryCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
