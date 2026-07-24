import type {SkillGroup} from '@/lib/types'

export function SkillGroups({groups}: {groups: SkillGroup[]}) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="font-medium">{group.category}</h3>
          {group.items && group.items.length > 0 && (
            <p className="mt-1 text-sm text-foreground/80">{group.items.join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  )
}
