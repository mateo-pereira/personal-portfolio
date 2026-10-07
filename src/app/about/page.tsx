import type {Metadata} from 'next'
import Image from 'next/image'

import {ArrowLink} from '@/components/arrow-link'

export const metadata: Metadata = {
  title: 'About Me — Mateo Pereira',
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <header className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/machu_picchu.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[center_60%]"
        />
        {/* Darken toward the text side and fade into the page so the heading stays legible */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/55 to-background/20"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-28 sm:pt-44 sm:pb-40">
          <p className="text-xs font-semibold tracking-[0.35em] text-accent uppercase">Get to know</p>
          <h1 className="mt-6 text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
            <span className="font-light text-foreground/85">About</span>{' '}
            <span className="font-bold">Me</span>
          </h1>
          <span className="mt-8 block h-[2px] w-16 bg-accent" />
        </div>
      </header>

      {/* Who I am */}
      <section id="who-i-am" className="bg-[#20253b]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-20 sm:py-28 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Who I am</h2>
            <span className="mt-6 block h-[2px] w-12 bg-accent" />
            <p className="mt-8 text-2xl leading-snug font-light sm:text-3xl">
              Hey! I&rsquo;m <span className="font-semibold text-accent">Mateo Pereira</span>, a programmer focused
              on backend development, infrastructure, and automation.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              I began this career journey because of my love for computers, mathematics, and automation.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-accent/60" />
            <Image
              src="/images/mountain_pic.jpg"
              alt="Mateo standing on a rocky ridge in front of snow-covered mountains"
              width={1500}
              height={2000}
              sizes="(min-width: 768px) 45vw, 90vw"
              className="relative aspect-[3/4] w-full object-cover grayscale-[15%]"
              priority
            />
          </figure>
        </div>
      </section>

      {subsections.map((section, i) => {
        const body = section.body ?? <p className="text-lg text-foreground/40 italic">Coming soon.</p>
        // "Who I am" has its photo on the right, so subsections alternate starting with the photo on the left
        const imageLeft = i % 2 === 0

        return (
          <section key={section.id} id={section.id} className={i % 2 === 1 ? 'bg-[#20253b]' : undefined}>
            {section.image ? (
              <div
                className={`mx-auto grid w-full items-center gap-14 px-6 py-20 sm:py-28 ${
                  section.image.large
                    ? `max-w-7xl md:gap-16 ${imageLeft ? 'md:grid-cols-[1.4fr_1fr]' : 'md:grid-cols-[1fr_1.4fr]'}`
                    : 'max-w-6xl md:grid-cols-2 md:gap-20'
                }`}
              >
                <div className={imageLeft ? 'md:order-2' : undefined}>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{section.title}</h2>
                  <span className="mt-6 block h-[2px] w-12 bg-accent" />
                  <div className="mt-8">{body}</div>
                </div>
                <figure className={`w-full ${imageLeft ? 'md:order-1' : ''}`}>
                  <div className="relative">
                    <div
                      aria-hidden
                      className={`absolute inset-0 translate-y-4 border border-accent/60 ${
                        imageLeft ? '-translate-x-4' : 'translate-x-4'
                      }`}
                    />
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width}
                      height={section.image.height}
                      sizes={section.image.large ? '(min-width: 768px) 60vw, 90vw' : '(min-width: 768px) 50vw, 90vw'}
                      className="relative w-full object-cover"
                    />
                  </div>
                  {section.image.caption && (
                    <figcaption className="mt-8 text-sm leading-relaxed font-light text-foreground/50">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              </div>
            ) : (
              <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{section.title}</h2>
                  <span className="mt-6 block h-[2px] w-12 bg-accent" />
                </div>
                <div className="border-l border-white/10 pl-6 md:pl-10">{body}</div>
              </div>
            )}
          </section>
        )
      })}

      <section className="mx-auto flex w-full max-w-6xl justify-center px-6 py-20 sm:py-24">
        <ArrowLink href="/mindset">Explore my mindset</ArrowLink>
      </section>
    </main>
  )
}

type Subsection = {
  id: string
  title: string
  body?: React.ReactNode
  image?: {src: string; alt: string; width: number; height: number; caption?: string; large?: boolean}
}

const subsections: Subsection[] = [
  {
    id: 'influences',
    title: 'My Influences',
    body: (
      <p className="text-lg leading-relaxed text-foreground/70">
        I wouldn&rsquo;t be anywhere near where I am today without the support of my family and friends. They have
        been there through every challenge, milestone, and setback, constantly encouraging me to keep pushing forward
        and reminding me of what I&rsquo;m capable of. Their support has shaped who I am both personally and
        professionally, and I&rsquo;m incredibly grateful to have them by my side.
      </p>
    ),
    image: {
      src: '/images/family_pic.jpg',
      alt: 'Mateo with family and friends in Colombia jerseys, celebrating at a restaurant during a soccer match',
      width: 1206,
      height: 918,
    },
  },
  {
    id: 'how-i-engineer',
    title: 'How I Engineer',
    body: (
      <div className="space-y-5 text-lg leading-relaxed text-foreground/70">
        <p>
          Growing up, I always enjoyed finding easier and more efficient ways to accomplish difficult tasks. That
          mindset has carried into the way I approach software engineering: rather than immediately jumping into
          implementation, I like to understand the problem, consider the available options, and find the solution that
          provides the best balance of simplicity, efficiency, and reliability.
        </p>
        <p>
          I also believe good engineering goes beyond simply making something work. I look for opportunities to
          automate repetitive processes, improve existing solutions, and think about how a system can scale and remain
          maintainable over time. My goal is to build solutions that not only solve the problem at hand, but solve it
          in the most effective way possible.
        </p>
      </div>
    ),
    image: {
      src: '/images/satisfactory_pic.png',
      alt: 'First-person view over a large, neatly organized factory build in the game Satisfactory',
      width: 1920,
      height: 1080,
      caption:
        'Screenshot of a factory I built in Satisfactory that took my friend and I forty long grueling hours combined',
      large: true,
    },
  },
  {
    id: 'exploring',
    title: 'What I’m Exploring',
    body: (
      <div className="space-y-5 text-lg leading-relaxed text-foreground/70">
        <p>
          I&rsquo;m always looking for ways to improve myself, whether that&rsquo;s through my career, hobbies, or the
          relationships I build with the people around me.
        </p>
        <p>
          Professionally, I&rsquo;m focused on becoming a stronger engineer by exploring how AI can be integrated into
          automation workflows (not just by spamming claude commands) to reduce repetitive work, improve
          decision-making, and make engineering processes more efficient.
        </p>
        <p>
          While automation is a major area of interest for me, I also want to continue deepening my understanding of
          backend engineering, particularly how APIs, distributed systems, data, and infrastructure come together to
          build reliable and scalable applications. I&rsquo;m excited to keep expanding my technical perspective and
          finding new ways to apply what I learn to solve problems more effectively.
        </p>
      </div>
    ),
    image: {
      src: '/images/automation_ages_comic.png',
      alt: 'Six-panel comic titled "Nothing can stop automation": through the Stone, Bronze, Iron, Dark, and Modern Ages a figure bangs away with a hammer at their work, and in the Computer Age a frustrated person swings a hammer at their computer.',
      width: 735,
      height: 431,
    },
  },
  {
    id: 'beyond-coding',
    title: 'Beyond Coding',
    body: (
      <p className="text-lg leading-relaxed text-foreground/70">
        In my free time, I enjoy playing soccer and basketball, hiking, and video games such as Satisfactory,
        Wizard101, and Rocket League. I am very competitive so I am always looking for a new challenge to face!
      </p>
    ),
    image: {
      src: '/images/soccer_winning.jpg',
      alt: 'Mateo’s college soccer team posing on a lit field at night, celebrating a league championship',
      width: 3024,
      height: 4032,
      caption: 'My soccer intramural team in college right after we won the league championship',
    },
  },
]
