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
      {certifications.map((certification, i) => (
        <Certification
          key={certification.name}
          certification={certification}
          latest={i === 0}
        />
      ))}
    </ol>
  )
}
