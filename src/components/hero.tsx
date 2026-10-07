import type {SiteSettings} from '@/lib/types'

export function Hero({settings}: {settings: SiteSettings}) {
  return (
    <header
      id="top"
      className="flex min-h-[80vh] w-full flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-xs font-semibold tracking-[0.3em] text-foreground/60 uppercase">
        {settings.role}
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
        Hi, I&rsquo;m {settings.name}
      </h1>
      {settings.tagline && (
        <p className="mt-5 max-w-xl text-lg text-foreground/70">{settings.tagline}</p>
      )}
      <a
        href="#tiles"
        className="mt-10 border border-white/30 px-8 py-3 text-xs font-semibold tracking-[0.25em] uppercase transition hover:border-white hover:bg-white/5"
      >
        Get Started
      </a>
    </header>
  )
}
