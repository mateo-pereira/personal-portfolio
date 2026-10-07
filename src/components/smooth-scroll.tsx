'use client'

import {useEffect} from 'react'

// Browsers' built-in smooth scroll runs roughly 600ms for a jump like Get Started; this is 25% slower.
const DURATION_MS = 750
// Keep in sync with scroll-padding-top in globals.css so the sticky nav doesn't cover the target
const NAV_OFFSET_PX = 80

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/** Animates same-page hash links (e.g. "#tiles", "/#contact" on the home page) at a fixed speed. */
export function SmoothScroll() {
  useEffect(() => {
    let frame = 0

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const anchor = (e.target as Element | null)?.closest('a[href*="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const url = new URL(anchor.href)
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (!target) return

      // Runs in the capture phase, so preventing default here also stops Next's <Link> from jumping
      e.preventDefault()
      history.pushState(null, '', url.hash)

      cancelAnimationFrame(frame)
      const start = window.scrollY
      const end = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX
      const startTime = performance.now()

      function step(now: number) {
        const progress = Math.min((now - startTime) / DURATION_MS, 1)
        window.scrollTo(0, start + (end - start) * easeInOutCubic(progress))
        if (progress < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    document.addEventListener('click', onClick, {capture: true})
    return () => {
      document.removeEventListener('click', onClick, {capture: true})
      cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
