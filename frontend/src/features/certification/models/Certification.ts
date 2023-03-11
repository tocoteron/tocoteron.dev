import { Date } from '../../../models/Time'

export default interface Certificaiton {
  date: Date
  name: string
  notes?: string[]
}
