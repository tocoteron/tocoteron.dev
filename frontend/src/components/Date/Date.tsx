import * as time from '@/models/Time'

interface DateProps {
  date: time.Date
  pad?: boolean
}

export default function Date({ date, pad }: DateProps) {
  return <span>{time.DateToString(date, pad)}</span>
}
