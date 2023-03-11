import CertificationModel from '../../models/Certification'
import Certification from '../Certification'

import styles from './CertificationList.module.scss'

interface CertificationListProps {
  certifications: CertificationModel[]
}

export default function CertificationList({
  certifications,
}: CertificationListProps) {
  return (
    <ol className={styles.certifications}>
      {certifications.map(certification => (
        <Certification key={certification.name} certification={certification} />
      ))}
    </ol>
  )
}
