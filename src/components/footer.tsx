import type {SiteSettings} from '@/lib/types'
import {ContactForm} from './contact-form'

export function Footer({settings}: {settings: SiteSettings}) {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-16">
        <h2 className="text-center text-sm font-semibold tracking-[0.25em] text-foreground/50 uppercase">
          Get In Touch
        </h2>
        <ContactForm />
      </div>
      <p className="border-t border-white/10 py-6 text-center text-xs text-foreground/40">
        © {new Date().getFullYear()} {settings.name}
      </p>
    </footer>
  )
}
