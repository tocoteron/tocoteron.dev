import { Career as CareerModel } from '../../models/Career'
import CompanyJobs from '../CompanyJobs'

import styles from './Career.module.scss'

interface CareerProps {
  career: CareerModel
}

export default function Career({ career }: CareerProps) {
  return (
    <ol>
      {career.map(companyJobs => {
        return (
          <li key={companyJobs.company.name} className={styles['company-jobs']}>
            <CompanyJobs companyJobs={companyJobs} />
          </li>
        )
      })}
    </ol>
  )
}
