import JobModel from '../../models/Job'

import styles from './Job.module.scss'

import Period from '@/components/Period'
import Tag from '@/components/Tag'

interface Props {
  job: JobModel
}

export default function Job({ job }: Props) {
  return (
    <div className={styles.job}>
      <div className={styles.divider}></div>
      <div className={styles.description}>
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
          Worked at <Period period={job.period} />
        </div>
        {job.notes && (
          <ul>
            {job.notes.map((note, i) => (
              <li key={i}>{note.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
