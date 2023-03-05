import styles from './Tag.module.scss'

interface TagProps {
  children: React.ReactNode
}

export default function Tag({ children }: TagProps) {
  return <div className={styles.tag}>{children}</div>
}
