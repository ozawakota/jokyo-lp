import React from 'react'
import styles from './Header.module.scss'
import clsx from 'clsx'

export interface Props {
  /** クラス名 */
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx(styles['wrapper'], className)}>
      <h1 className={clsx(styles.h1, 'is-pc font-24-28')}>
        <span>ヘッダー</span>
      </h1>
    </header>
  )
}
