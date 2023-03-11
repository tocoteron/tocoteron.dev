import clsx from 'clsx'

import styles from './index.module.scss'

import Career from '@/features/career/components/Career'
import career from '@/features/career/data/career'
import CertificationList from '@/features/certification/components/CertificationList'
import certifications from '@/features/certification/data/certifications'
import Profile from '@/features/profile/components/Profile'

export default function Home() {
  return (
    <>
      <section className={clsx(styles.section, styles['profile-section'])}>
        <Profile />
      </section>
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Career</h2>
        <Career career={career} />
      </section>
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Certification</h2>
        <CertificationList certifications={certifications} />
      </section>
    </>
  )
}
