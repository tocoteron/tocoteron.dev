import { Company } from './Company'
import Job from './Job'

export default interface CompanyJobs {
  company: Company
  jobs: Job[]
}
