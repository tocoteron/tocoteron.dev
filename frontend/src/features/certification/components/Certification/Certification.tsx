import CertificaitonModel from '../../models/Certification'

import Card from '@/components/Card'
import Date from '@/components/Date'

interface CertificationProps {
  certification: CertificaitonModel
}

export default function Certification({ certification }: CertificationProps) {
  return (
    <Card filled>
      <Date date={certification.date} pad />
      <span>{certification.name}</span>
    </Card>
  )
}
