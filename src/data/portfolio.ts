// ─── Portfolio Data ─────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Update this file to change content across all design variants.

export const person = {
  name: 'Miguel Angel Taco',
  role: 'Full-Stack Developer',
  tagline: 'Estudiante de Ingeniería de Software en la UNMSM. Construyo interfaces, diseño bases de datos y conecto los puntos intermedios.',
  location: 'Lima, Perú',
  email: 'zangelomt@gmail.com',
  github: 'https://github.com/MiguelTacoZavala',
  linkedin: 'https://www.linkedin.com/in/migueltaco23',
  university: 'Universidad Nacional Mayor de San Marcos',
  degree: 'Ingeniería de Software',
  cycle: '8.° ciclo',
  currentlyLearning: ['Docker', 'AWS'],
  seeking: 'Prácticas preprofesionales en desarrollo web',
} as const

// ─── Projects ───────────────────────────────────────────────────────────────

export type ProjectType = 'personal' | 'collaborative'

export interface Project {
  id: string
  name: string
  type: ProjectType
  shortDescription: string
  problem: string
  solution: string
  role: string
  tech: string[]
  demo?: string
  repo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'movi',
    name: 'Movi',
    type: 'collaborative',
    shortDescription: 'Plataforma de gestión para academias de baile.',
    problem:
      'Las academias de baile gestionaban reservas de clases y cobros de forma manual, sin visibilidad real del estado de ocupación.',
    solution:
      'Construí un sistema completo con tres roles diferenciados —cliente, instructor y administrador— que incluye mapa de asientos interactivo, pagos integrados con Yape vía Culqi, generación automática de clases por horario y un dashboard con métricas de ingresos.',
    role: 'Desarrollador Full-Stack. Diseñé la arquitectura backend con Express y Prisma, implementé la autenticación JWT, el flujo de pagos y el módulo de reservas con selección visual de posiciones.',
    tech: ['React 19', 'Node.js', 'Express 5', 'Prisma', 'MySQL', 'JWT', 'Culqi/Yape', 'Vite', 'Zod'],
    demo: 'https://movi-dusky.vercel.app',
    repo: 'https://github.com/MiguelTacoZavala/Movi',
    featured: true,
  },
  {
    id: 'patitas-sanas',
    name: 'Patitas Sanas',
    type: 'collaborative',
    shortDescription: 'Sistema de gestión para clínicas veterinarias.',
    problem:
      'Una clínica veterinaria necesitaba digitalizar su operación: desde la recepción de pacientes hasta la generación de reportes y el seguimiento de citas.',
    solution:
      'En equipo de seis personas construimos una plataforma con tres roles (administrador, recepcionista, veterinario) que cubre el ciclo completo: registro de clientes y mascotas, triaje, consultas médicas, historial clínico, recordatorios automáticos de cita por email, flujo de caja y reportes PDF.',
    role: 'Desarrollador Frontend. Implementé los dashboards por rol, el módulo de citas con notificaciones, los reportes con Recharts y la gestión del historial clínico.',
    tech: ['React 19', 'Vite', 'React Router 7', 'FastAPI', 'Python', 'MySQL', 'Recharts', 'Pytest', 'Vitest'],
    demo: 'https://patitas-sanas-sigma.vercel.app',
    repo: 'https://github.com/KevinBohorquez/PatitasSanas',
    featured: true,
  },
  {
    id: 'marketing-crm',
    name: 'Marketing CRM',
    type: 'collaborative',
    shortDescription: 'Módulo de email marketing para un CRM empresarial.',
    problem:
      'Un equipo necesitaba un módulo de email marketing integrado en su CRM para gestionar campañas, rastrear entregas y medir resultados en tiempo real.',
    solution:
      'Colaboré en un equipo de seis para diseñar el esquema de base de datos relacional del módulo y construir la integración de webhooks para tracking de entregas en tiempo real.',
    role: 'Diseñé el schema de base de datos del módulo de email marketing e integré los webhooks para el seguimiento de estados de entrega en tiempo real.',
    tech: ['React', 'TypeScript', 'Java Spring Boot', 'MySQL', 'Webhooks'],
    demo: 'https://marketing-crm-pearl.vercel.app',
    repo: 'https://github.com/mrcastilla8/Marketing-CRM',
    featured: true,
  },
  {
    id: 'asistencia-facial',
    name: 'Control de Asistencia Facial',
    type: 'collaborative',
    shortDescription: 'Sistema de asistencia con reconocimiento facial en tiempo real.',
    problem: 'Registro manual de asistencia lento y propenso a errores.',
    solution:
      'Sistema que detecta, sigue e identifica personas mediante cámara usando YOLOv8 para detección, ByteTrack para seguimiento continuo y face_recognition para identificación.',
    role: 'Miembro del equipo de desarrollo. Contribuí al pipeline de reconocimiento y al dataset de entrenamiento.',
    tech: ['Python', 'OpenCV', 'YOLOv8', 'ByteTrack', 'face_recognition', 'Jupyter'],
    repo: 'https://github.com/MiguelTacoZavala/sistema-control-asistencia-facial',
    featured: false,
  },
  {
    id: 'gestion-gastos',
    name: 'Sistema de Gestión de Gastos',
    type: 'collaborative',
    shortDescription: 'App personal para registrar y categorizar gastos.',
    problem: 'Sin un lugar centralizado para registrar gastos, era difícil analizar hábitos de consumo.',
    solution:
      'Aplicación web desacoplada (frontend React + backend Express) para registrar gastos por categoría y visualizar estadísticas.',
    role: 'Desarrollador Full-Stack. Diseño de base de datos, API REST y frontend.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Sequelize', 'MySQL'],
    repo: 'https://github.com/MiguelTacoZavala/Sistema_Gestion_Gastos',
    featured: false,
  },
]

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export interface TechGroup {
  label: string
  items: string[]
}

export const techStack: TechGroup[] = [
  {
    label: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Prisma', 'Sequelize'],
  },
  {
    label: 'Bases de datos',
    items: ['MySQL', 'SQL Server', 'Oracle Database'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Postman', 'Figma'],
  },
  {
    label: 'Aprendiendo',
    items: ['Docker', 'AWS', 'FastAPI', 'Python'],
  },
]

// ─── Education & Certifications ──────────────────────────────────────────────

export interface EducationItem {
  institution: string
  degree: string
  period: string
  detail?: string
  type: 'degree' | 'cert'
}

export const education: EducationItem[] = [
  {
    institution: 'Universidad Nacional Mayor de San Marcos',
    degree: 'Ingeniería de Software',
    period: '2021 – Presente',
    detail: '8.° ciclo — Facultad de Ingeniería de Sistemas e Informática',
    type: 'degree',
  },
  {
    institution: 'freeCodeCamp',
    degree: 'JavaScript Developer Certification',
    period: '2026',
    type: 'cert',
  },
  {
    institution: 'SCRUMstudy',
    degree: 'Scrum Fundamentals Certified (SFC)',
    period: '2025',
    type: 'cert',
  },
  {
    institution: 'Universidad Nacional de Ingeniería (UNI)',
    degree: 'Diseño Web con HTML5',
    period: '2025',
    type: 'cert',
  },
]

