import styles from './index.module.scss'

import Career from '@/features/career/components/Career'
import career from '@/features/career/data/career'

export default function Home() {
  return (
    <>
      <section>
        <h2 className={styles['section-title']}>Career</h2>
        <Career career={career} />
      </section>
    </>
  )
}
