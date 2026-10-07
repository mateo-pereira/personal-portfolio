import Image from 'next/image'

import type {SiteSettings} from '@/lib/types'

export function Hero({settings}: {settings: SiteSettings}) {
  return (
    <header id="top" className="relative isolate flex min-h-[80vh] w-full items-end overflow-hidden">
      <Image
        src="/images/machu_picchu.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_60%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/70" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pb-24">
        <p className="text-xs font-semibold tracking-[0.35em] text-accent uppercase">{settings.role}</p>
        <h1 className="mt-4 inline-block border-b-2 border-white pb-3 text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&rsquo;m {settings.name}
        </h1>
        <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
          {settings.tagline && (
            <p className="max-w-md text-lg leading-relaxed text-foreground/80">{settings.tagline}</p>
          )}
          <a
            href="#tiles"
            className="shrink-0 border-2 border-white px-8 py-3 text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300 hover:bg-white hover:text-background"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
