import JobModel from '../../models/Job'

import styles from './Job.module.scss'

import Card from '@/components/Card'
import Period from '@/components/Period'
import Tag from '@/components/Tag'
import TextCursor from '@/components/TextCursor'

interface Props {
  job: JobModel
}

export default function Job({ job }: Props) {
  const isCurrentJob = !('until' in job.period)

  return (
    <Card filled={isCurrentJob}>
      <div className={styles.tags}>
        <div className={styles.position}>
          <Tag>{job.employmentStatus}</Tag>
          <Tag>{job.role}</Tag>
        </div>
        <ul className={styles.domains}>
          {job.domains.map(domain => (
            <li key={domain}>
              <Tag>{domain}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {isCurrentJob ? 'Working' : 'Worked at'}&nbsp;
        <Period period={job.period} />
        {isCurrentJob && !job.notes && <TextCursor />}
      </div>
      {job.notes && (
        <ul>
          {job.notes.map((note, i) => (
            <li key={i}>
              {note.text}
              {isCurrentJob && i === job.notes!.length - 1 && <TextCursor />}
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
