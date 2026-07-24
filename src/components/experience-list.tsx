import {formatDateRange} from '@/lib/format'
import type {ExperienceItem} from '@/lib/types'

export function ExperienceList({items}: {items: ExperienceItem[]}) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <article key={`${item.company}-${item.role}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">
              {item.role} · {item.company}
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
        </article>
      ))}
    </div>
  )
}
