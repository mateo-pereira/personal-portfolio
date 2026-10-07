import type {Metadata} from 'next'

import {ArrowLink} from '@/components/arrow-link'

export const metadata: Metadata = {
  title: 'Present Day — Mateo Pereira',
}

export default function PresentDayPage() {
  return (
    <main className="flex-1">
      <header className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <p className="text-xs font-semibold tracking-[0.35em] text-accent uppercase">What I&rsquo;m up to now</p>
          <h1 className="mt-6 text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
            <span className="font-light text-foreground/85">Present</span> <span className="font-bold">Day</span>
          </h1>
          <span className="mt-8 block h-[2px] w-16 bg-accent" />
        </div>
      </header>

      <section className="bg-[#20253b]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
          <p className="text-lg text-foreground/40 italic">Coming soon.</p>
        </div>
      </section>

      <section className="flex justify-center px-6 py-20 sm:py-24">
        <ArrowLink href="/resume">Check out my resume</ArrowLink>
      </section>
    </main>
  )
}
