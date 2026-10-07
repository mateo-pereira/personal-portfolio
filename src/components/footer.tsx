import type {SiteSettings} from '@/lib/types'
import {ContactForm} from './contact-form'

export function Footer({settings}: {settings: SiteSettings}) {
  const details = [
    settings.email && {label: 'Email', value: settings.email, href: `mailto:${settings.email}`},
    settings.githubUrl && {label: 'GitHub', value: prettyUrl(settings.githubUrl), href: settings.githubUrl},
    settings.linkedinUrl && {label: 'LinkedIn', value: prettyUrl(settings.linkedinUrl), href: settings.linkedinUrl},
  ].filter((d): d is {label: string; value: string; href: string} => Boolean(d))

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#20253b]">
      <div className="mx-auto grid w-full max-w-6xl md:grid-cols-[1.6fr_1fr]">
        <div className="px-6 py-16 md:py-20 md:pr-12">
          <h2 className="mb-10 inline-block border-b-2 border-white pb-2 text-2xl font-bold tracking-[0.15em] uppercase">
            Get In Touch
          </h2>
          <ContactForm />
        </div>

        <ul className="flex flex-col border-t border-white/10 md:border-t-0 md:border-l">
          {details.map((detail) => (
            <li key={detail.label} className="border-b border-white/10 px-6 py-8 last:border-b-0 md:px-10 md:py-10">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">{detail.label}</h3>
              <a
                href={detail.href}
                {...(detail.href.startsWith('http') ? {target: '_blank', rel: 'noreferrer'} : {})}
                className="mt-2 block break-words text-foreground/80 transition-colors hover:text-foreground"
              >
                {detail.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="border-t border-white/10 py-6 text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} {settings.name}
      </p>
    </footer>
  )
}

function prettyUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}
