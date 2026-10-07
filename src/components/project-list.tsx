import {formatDateRange} from '@/lib/format'
import type {ProjectItem} from '@/lib/types'

export function ProjectList({items}: {items: ProjectItem[]}) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <article key={item.title}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">
              {item.title}
              {item.subtitle && <span className="text-foreground/60"> · {item.subtitle}</span>}
            </h3>
            <span className="text-sm text-foreground/60">
              {formatDateRange(item.startDate, item.endDate, item.isCurrent)}
            </span>
          </div>
          {item.location && <p className="text-sm text-foreground/60">{item.location}</p>}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
          {item.tags && item.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-foreground/15 px-2 py-0.5 text-xs">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {(item.repoUrl || item.liveUrl) && (
            <div className="mt-3 flex gap-4 text-sm">
              {item.repoUrl && (
                <a className="underline hover:no-underline" href={item.repoUrl} target="_blank" rel="noreferrer">
                  Repository
                </a>
              )}
              {item.liveUrl && (
                <a className="underline hover:no-underline" href={item.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
