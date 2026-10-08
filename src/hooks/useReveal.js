import { useEffect } from 'react'

/**
 * Subtle reveal-on-scroll for every element marked with `.reveal`.
 * Respects the user's `prefers-reduced-motion` setting by showing
 * everything immediately instead of animating.
 */
export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'))
    if (items.length === 0) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
