import Date from '../Date'

import * as time from '@/models/Time'

interface PeriodProps {
  period: time.Period
  pad?: boolean
}

export default function Period({ period, pad }: PeriodProps) {
  return (
    <span>
      {'since' in period && <Date date={period.since} pad={pad} />}
      <span>&ndash;</span>
      {'until' in period && <Date date={period.until} pad={pad} />}
    </span>
  )
}
