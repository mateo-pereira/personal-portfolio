import type {Metadata} from 'next'
import Image from 'next/image'

import {ArrowLink} from '@/components/arrow-link'

export const metadata: Metadata = {
  title: 'Mindset — Mateo Pereira',
}

export default function MindsetPage() {
  return (
    <main className="flex-1">
      <header className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/failure_path.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        {/* The illustration is light, so darken the text side and fade into the page */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/70 to-background/10"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-28 sm:pt-44 sm:pb-40">
          <p className="text-xs font-semibold tracking-[0.35em] text-accent uppercase">How I think and grow</p>
          <h1 className="mt-6 text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
            <span className="font-light text-foreground/85">My</span> <span className="font-bold">Mindset</span>
          </h1>
          <span className="mt-8 block h-[2px] w-16 bg-accent" />
        </div>
      </header>

      <section id="failure-is-progress" className="bg-[#20253b]">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-14 px-6 py-20 sm:py-28 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Failure Is Progress</h2>
            <span className="mt-6 block h-[2px] w-12 bg-accent" />

            <p className="mt-8 text-2xl leading-snug font-light sm:text-3xl">
              Failure is something a lot of people try to avoid. I see it differently.
            </p>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/70">
              <p>
                To me, failure is simply another step toward the goal. Every mistake, setback, or unsuccessful attempt
                gives you something the previous attempt didn&rsquo;t: information. It shows you what didn&rsquo;t
                work, what you can improve, and what you should try next.
              </p>
              <p>The important part isn&rsquo;t whether you fail. It&rsquo;s what you do afterward.</p>
              <p>
                I believe success is rarely the result of one perfect opportunity. It comes from putting in the work
                long before that opportunity appears. That&rsquo;s why I like the idea:
              </p>
            </div>

            <blockquote className="my-10 border-l-2 border-accent pl-6 text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
              &ldquo;Luck is what happens when preparation meets opportunity.&rdquo;
            </blockquote>

            <div className="space-y-5 text-lg leading-relaxed text-foreground/70">
              <p>
                An opportunity might look like luck from the outside, but being ready for it is rarely accidental. The
                failures along the way are part of that preparation. They build the experience, knowledge, and
                resilience that allow you to recognize an opportunity and make the most of it when it finally comes.
              </p>
              <p>
                So I don&rsquo;t look at failure as the opposite of success. I look at it as evidence that I&rsquo;m
                learning, adapting, and getting closer.
              </p>
            </div>

            <p className="mt-8 text-xl font-semibold text-accent">Every failure is one step closer to getting it right.</p>
          </div>

          {/* Stays in view while the longer text scrolls past on desktop */}
          <figure className="relative mx-auto w-full max-w-md md:sticky md:top-28 md:max-w-none">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-accent/60" />
            <div className="relative bg-white p-4 sm:p-6">
              <Image
                src="/images/luck_graph.png"
                alt="Graph: a red preparation line curves upward to meet a flat opportunity line; past the meeting point the curve rises steeply in green, and the shaded area between them is labeled luck."
                width={496}
                height={307}
                sizes="(min-width: 768px) 40vw, 90vw"
                className="w-full"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="flex justify-center px-6 py-20 sm:py-24">
        <ArrowLink href="/resume">Check out my resume</ArrowLink>
      </section>
    </main>
  )
}
