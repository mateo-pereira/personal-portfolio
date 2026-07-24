import {formatDateRange} from '@/lib/format'
import type {EducationItem} from '@/lib/types'

export function EducationList({items}: {items: EducationItem[]}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <article key={item.school}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">{item.school}</h3>
            <span className="text-sm text-foreground/60">
              {formatDateRange(item.startDate, item.endDate)}
            </span>
          </div>
          {item.degree && <p className="text-sm text-foreground/80">{item.degree}</p>}
          {item.location && <p className="text-sm text-foreground/60">{item.location}</p>}
        </article>
      ))}
    </div>
  )
}
