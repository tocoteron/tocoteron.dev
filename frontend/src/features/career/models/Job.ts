import { Period } from '@/models/Time'

export default interface Job {
  employmentStatus: EmploymentStatus
  period: Period
  role: Role
  domains: Domain[]
  notes?: Note[]
}

type EmploymentStatus = 'Full-time' | 'Part-time' | 'Subcontract' | 'Internship'

type Role = 'Software Engineer'

type Domain =
  | 'Infrastructure'
  | 'Web'
  | 'Web backend'
  | 'Web frontend'
  | 'Mobile'
  | 'iOS app'
  | 'Android app'
  | 'IoT'
  | 'Blockchain'

interface Note {
  text: string
  links?: string[]
}
