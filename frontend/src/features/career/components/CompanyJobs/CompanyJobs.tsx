import CompanyJobsModel from '../../models/CompanyJobs'
import Job from '../Job'

import styles from './CompanyJobs.module.scss'

interface CompanyJobsProps {
  companyJobs: CompanyJobsModel
}

export default function CompanyJobs({ companyJobs }: CompanyJobsProps) {
  return (
    <>
      <div className={styles['company-name']}>{companyJobs.company.name}</div>
      <ol className={styles.jobs}>
        {companyJobs.jobs.map((job, i) => (
          <li key={i}>
            <Job job={job} />
          </li>
        ))}
      </ol>
    </>
  )
}
