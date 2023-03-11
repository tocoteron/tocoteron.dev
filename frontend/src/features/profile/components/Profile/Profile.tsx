import Image from 'next/image'
import { AiFillTwitterCircle, AiFillGithub, AiFillMail } from 'react-icons/ai'

import styles from './Profile.module.scss'

import TextCursor from '@/components/TextCursor'

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.brand}>
        <h2 className={styles.name}>
          t
          <Image src="/tocoteron.svg" width={78} height={78} alt="My avatar" />
          teron
        </h2>
        <div className={styles.contacts}>
          <a
            className={styles.contact}
            href="https://github.com/tocoteron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={28} />
          </a>
          <a
            className={styles.contact}
            href="https://twitter.com/tocoteron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle size={28} />
          </a>
          <a
            className={styles.contact}
            href="mailto:tocoteron@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail size={28} />
          </a>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          I&apos;m a software engineer in Japan.
          <br />
          Why don&apos;t we talk about computers, anime, movies, illusts and so
          on?
          <br />
          Walking and looking outside in the night.
          <TextCursor />
        </p>
      </div>
    </div>
  )
}
