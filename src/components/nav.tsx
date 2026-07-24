const links = [
  {href: '#experience', label: 'Experience'},
  {href: '#projects', label: 'Projects'},
  {href: '#skills', label: 'Skills'},
  {href: '#education', label: 'Education'},
  {href: '#contact', label: 'Contact'},
]

export function Nav({name}: {name: string}) {
  return (
    <nav className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold">
          {name}
        </a>
        <ul className="flex gap-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
