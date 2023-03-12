import clsx from 'clsx'

import styles from './Button.module.scss'

type ButtonVariant = 'switch' | 'forward'

interface ButtonProps {
  variant?: ButtonVariant
  onClick: () => void
  children: React.ReactNode
}

export default function Button({
  variant = 'switch',
  onClick,
  children,
}: ButtonProps) {
  const className = clsx(styles.button, {
    [styles.switch]: variant === 'switch',
    [styles.forward]: variant === 'forward',
  })

  return (
    <button className={className} onClick={onClick}>
      <div className={styles.content}>{children}</div>
    </button>
  )
}
