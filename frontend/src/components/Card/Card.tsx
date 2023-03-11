import clsx from 'clsx'

import styles from './Card.module.scss'

interface CardProps {
  filled?: boolean
  children: React.ReactNode
}

export default function Card({ filled, children }: CardProps) {
  return (
    <div className={clsx(styles.card, filled && styles.filled)}>
      {!filled && <div className={styles.divider} />}
      <div className={styles.content}>{children}</div>
    </div>
  )
}
