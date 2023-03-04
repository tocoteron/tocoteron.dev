import clsx from 'clsx'
import { Inter } from 'next/font/google'

import styles from './Layout.module.scss'

const font = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={clsx(styles.container, font.className)}>{children}</main>
  )
}
