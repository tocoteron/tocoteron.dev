import { Date } from '../../../models/Time'

import Note from '@/models/Note'

export default interface Certificaiton {
  date: Date
  name: string
  notes?: Note[]
}
