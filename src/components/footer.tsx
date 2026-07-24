import type {SiteSettings} from '@/lib/types'

export function Footer({settings}: {settings: SiteSettings}) {
  return (
    <footer id="contact" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-6 py-8 text-sm text-foreground/60">
        <p>
          Get in touch:{' '}
          {settings.email && (
            <a className="underline hover:no-underline" href={`mailto:${settings.email}`}>
              {settings.email}
            </a>
          )}
        </p>
        <p>© {new Date().getFullYear()} {settings.name}</p>
      </div>
    </footer>
  )
}
