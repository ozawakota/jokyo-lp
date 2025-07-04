import React, { memo } from 'react'
import styles from './index.module.scss'

const Template: React.FC = () => {
  return <div className={styles.wrapper}>アバウトページ</div>
}

export const RemovalTemplate = memo(Template)
