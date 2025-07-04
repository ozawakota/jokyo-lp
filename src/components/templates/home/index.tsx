import React, { memo } from 'react'
import styles from './index.module.scss'

const Template: React.FC = () => {
  return <div className={styles.wrapper}>ホームページ</div>
}

export const HomeTemplate = memo(Template)
