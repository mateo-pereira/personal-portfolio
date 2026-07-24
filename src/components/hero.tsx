import type {SiteSettings} from '@/lib/types'

export function Hero({settings}: {settings: SiteSettings}) {
  return (
    <header id="top" className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-foreground/60">{settings.role}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{settings.name}</h1>
      {settings.tagline && <p className="mt-4 text-lg text-foreground/80">{settings.tagline}</p>}
      {settings.summary && <p className="mt-4 max-w-2xl text-foreground/70">{settings.summary}</p>}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        {settings.email && (
          <a className="underline hover:no-underline" href={`mailto:${settings.email}`}>
            {settings.email}
          </a>
        )}
        {settings.githubUrl && (
          <a className="underline hover:no-underline" href={settings.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {settings.linkedinUrl && (
          <a className="underline hover:no-underline" href={settings.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {settings.resumeUrl && (
          <a className="underline hover:no-underline" href={settings.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        )}
      </div>
    </header>
  )
}
