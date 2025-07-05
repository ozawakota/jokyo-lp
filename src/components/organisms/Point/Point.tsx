import React from 'react'
import styles from './Point.module.scss'
import clsx from 'clsx'


export const Point: React.FC = () => {
  return (
    <section className={clsx(styles['p-lp-point'])} id="point">
      <div className="p-lp-price__header">
        <p className="c-heading c-heading--en">
          <span className="underline">POINTS</span>
        </p>
        <h2 className={clsx(styles['c-heading'])}>
          <img src="/assets/images/lp/point/point-head.webp" alt="西川式除去のポイント" />
        </h2>
      </div>

      <p className="c-center">
        <img src="/assets/images/lp/point/point-img.webp" alt="" />
      </p>
      <div className={clsx(styles['p-lp-point__img'])}>
        <img src="/assets/images/lp/point/point-img2.webp" alt="" />

      </div>
    </section>

  )
}
