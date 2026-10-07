import Link from 'next/link'

export function ArrowLink({
  href,
  children,
  direction = 'right',
}: {
  href: string
  children: React.ReactNode
  direction?: 'left' | 'right'
}) {
  const arrow = (
    <svg
      aria-hidden
      viewBox="0 0 36 14"
      className={`h-3.5 w-9 shrink-0 transition-transform duration-300 ${
        direction === 'left' ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M0 7h34M28 1l6 6-6 6" />
    </svg>
  )

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-5 border-2 border-white px-6 py-4 text-sm font-bold tracking-[0.25em] uppercase transition-colors duration-300 hover:bg-white hover:text-background sm:px-8 sm:py-5 sm:text-base"
    >
      {direction === 'left' && arrow}
      {children}
      {direction === 'right' && arrow}
    </Link>
  )
}
