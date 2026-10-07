import Image from 'next/image'
import Link from 'next/link'

type Tile = {
  href: string
  title: string
  subtitle: string
  /** Background photo; tiles without one get the "WIP" placeholder art */
  image?: string
  tint: string
  imagePosition?: string
  external?: boolean
}

// Row widths alternate narrow/wide, then wide/narrow
const widths = ['md:col-span-2', 'md:col-span-3', 'md:col-span-3', 'md:col-span-2']

export function TileGrid({githubUrl}: {githubUrl?: string}) {
  const tiles: Tile[] = [
    {
      href: '/about',
      title: 'About Me',
      subtitle: 'And my story',
      image: '/images/mountain_pic.jpg',
      imagePosition: 'object-[center_65%]',
      tint: 'bg-[#6f7bbf]',
    },
    {
      href: '/resume',
      title: 'Resume',
      subtitle: 'Experience, projects & skills',
      image: '/images/resume_page.png',
      imagePosition: 'object-top',
      tint: 'bg-[#4f9fbf]',
    },
    ...(githubUrl
      ? [
          {
            href: githubUrl,
            title: 'Projects',
            subtitle: 'What I’m building',
            image: '/images/github_logo.png',
            tint: 'bg-[#c27a6e]',
            external: true,
          },
        ]
      : []),
    {
      href: '/present-day',
      title: 'Present Day',
      subtitle: 'What I’m up to now',
      tint: 'bg-[#c9a06b]',
    },
  ]

  return (
    <section id="tiles" className="grid w-full md:grid-cols-5">
      {tiles.map((tile, i) => (
        <Link
          key={tile.title}
          href={tile.href}
          {...(tile.external ? {target: '_blank', rel: 'noreferrer'} : {})}
          className={`group relative isolate flex min-h-[40vh] items-center overflow-hidden px-8 py-16 sm:px-12 ${
            widths[i % widths.length]
          } ${tiles.length % 2 === 1 && i === tiles.length - 1 ? 'md:col-span-5' : ''}`}
        >
          {tile.image ? (
            <Image
              src={tile.image}
              alt=""
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className={`-z-20 object-cover grayscale transition-transform duration-500 group-hover:scale-105 ${tile.imagePosition ?? ''}`}
            />
          ) : (
            <WipArt />
          )}
          <div
            aria-hidden
            className={`absolute inset-0 -z-10 opacity-85 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-60 ${tile.tint}`}
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-background/30" />

          <div>
            <h2 className="inline-block border-b-2 border-white pb-2 text-2xl font-bold tracking-[0.15em] uppercase sm:text-3xl">
              {tile.title}
            </h2>
            <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-foreground/85 uppercase">{tile.subtitle}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

/** Placeholder art: outlined "WIP" over construction stripes, tinted like the photo tiles */
function WipArt() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-20 flex items-center justify-end overflow-hidden bg-[#e9e6df] bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.08)_0_28px,transparent_28px_56px)] pr-[6%] transition-transform duration-500 select-none group-hover:scale-105"
    >
      <span className="text-[9rem] leading-none font-bold tracking-tight text-transparent [-webkit-text-stroke:3px_#1c2033] sm:text-[12rem] lg:text-[15rem]">
        WIP
      </span>
    </div>
  )
}
