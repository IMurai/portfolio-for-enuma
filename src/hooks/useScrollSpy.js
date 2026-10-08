import { useEffect, useState } from 'react'

/**
 * Highlights the nav item of the section currently in view.
 * Falls back to "home" when nothing matches (e.g. at the very top).
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0 || !('IntersectionObserver' in window)) return

    const visible = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting)
        })

        const firstActive = ids.find((id) => visible.get(id))
        if (firstActive) setActive(firstActive)
      },
      {
        // Header covers the top of the viewport; this band picks the
        // section that occupies the middle of the screen.
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
