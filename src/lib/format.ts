const ISO_DATE = /^\d{4}-\d{2}(-\d{2})?$/

function formatDate(value: string): string {
  if (!ISO_DATE.test(value)) return value
  const date = new Date(`${value.length === 7 ? `${value}-01` : value}T00:00:00`)
  return date.toLocaleDateString('en-US', {month: 'short', year: 'numeric'})
}

export function formatDateRange(start?: string, end?: string, isCurrent?: boolean): string {
  const parts: string[] = []
  if (start) parts.push(formatDate(start))
  const endLabel = isCurrent ? 'Present' : end ? formatDate(end) : undefined
  if (endLabel) parts.push(endLabel)
  return parts.join(' – ')
}
