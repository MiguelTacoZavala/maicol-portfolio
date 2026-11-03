import React from 'react'
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const { ref, visible } = useFadeInOnScroll()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
