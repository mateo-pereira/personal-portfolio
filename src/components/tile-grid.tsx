import Link from 'next/link'

const tiles = [
  {href: '/about', title: 'About Me', subtitle: 'And my history'},
  {href: '/resume', title: 'Resume', subtitle: 'Experience, projects & skills'},
  {href: '#contact', title: 'Contact', subtitle: 'Get in touch'},
]

export function TileGrid() {
  return (
    <section id="tiles" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="grid gap-px overflow-hidden border border-white/10 sm:grid-cols-3">
        {tiles.map((tile) => (
          <Link
            key={tile.href}
            href={tile.href}
            className="group flex flex-col justify-center gap-2 border-white/10 bg-white/[0.02] px-8 py-14 text-center transition hover:bg-white/[0.06] sm:border-l sm:first:border-l-0"
          >
            <h2 className="text-xl font-semibold tracking-tight">{tile.title}</h2>
            <p className="text-xs tracking-[0.15em] text-foreground/50 uppercase">
              {tile.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
