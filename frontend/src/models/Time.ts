export interface Date {
  year: number
  month: number
  day: number
}

export type Period = PeriodSince | PeriodUntil | (PeriodSince & PeriodUntil)

export interface PeriodSince {
  since: Date
}

export interface PeriodUntil {
  until: Date
}

export function DateToString(date: Date, pad?: boolean) {
  const month = pad && date.month < 10 ? `0${date.month}` : `${date.month}`
  const day = pad && date.day < 10 ? `0${date.day}` : `${date.day}`

  return `${date.year}/${month}/${day}`
}
