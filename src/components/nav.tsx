'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'

const links = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About Me'},
  {href: '/mindset', label: 'Mindset'},
  {href: '/resume', label: 'Resume'},
  {href: '/#contact', label: 'Contact'},
]

export function Nav({name}: {name: string}) {
  const [open, setOpen] = useState(false)
  const [first, ...others] = name.split(' ')
  const rest = others.join(' ')
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-background/80 backdrop-blur">
        <div className="flex w-full items-center justify-between px-6 py-4">
          <Link href="/" aria-label={`${name} — home`} className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-accent/70 text-xs font-bold tracking-[0.15em] text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-background sm:h-10 sm:w-10 sm:text-sm">
              {initials}
            </span>
            <span className="relative text-[21px] leading-none tracking-tight sm:text-[25px]">
              <span className="font-light text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                {first}
              </span>{' '}
              <span className="font-bold text-foreground">{rest}</span>
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </span>
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex items-center gap-[17px] p-[11px] text-foreground/60 transition-colors duration-200 hover:text-foreground"
          >
            <span className="text-[17px] font-semibold tracking-[0.2em] uppercase">Menu</span>
            <span className="flex flex-col gap-2">
              <span className="h-[3px] w-[34px] bg-current transition-colors duration-200" />
              <span className="h-[3px] w-[34px] bg-current transition-colors duration-200" />
              <span className="h-[3px] w-[34px] bg-current transition-colors duration-200" />
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-30 flex flex-col bg-background/95 backdrop-blur-sm transition-all duration-300 ease-out ${
          open ? 'opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex justify-end px-6 py-5">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="p-[10px] text-[31px] leading-none text-foreground/70 transition-colors hover:text-foreground"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-1 flex-col items-center justify-center gap-[10px]">
          {links.map((link) => (
            <li key={link.href} className="w-full max-w-[416px] border-t border-white/10 first:border-t-0">
              <Link
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block py-[21px] text-center text-[18px] font-semibold tracking-[0.25em] uppercase transition hover:text-foreground/70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
