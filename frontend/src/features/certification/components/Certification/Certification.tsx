import CertificaitonModel from '../../models/Certification'

import Card from '@/components/Card'
import Date from '@/components/Date'
import TextCursor from '@/components/TextCursor'

interface CertificationProps {
  certification: CertificaitonModel
  latest?: boolean
}

export default function Certification({
  certification,
  latest,
}: CertificationProps) {
  return (
    <Card filled>
      <Date date={certification.date} pad />
      <span>
        {certification.name}
        {latest && <TextCursor />}
      </span>
    </Card>
  )
}
