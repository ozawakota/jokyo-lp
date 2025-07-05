import React from 'react'
import styles from './Price.module.scss'
import clsx from 'clsx'


export const Price: React.FC = () => {
  return (
    <section className={clsx(styles['p-lp-price'])} id="price">
      <div className="p-lp-price__header">
        <p className="c-heading c-heading--en">
          <span className="underline">PRICE</span>
        </p>
        <h2 className="c-heading">料金表</h2>
      </div>

      <p className="c-center">
        <img src="./assets/images/lp/price/price-img.webp" alt="" srcset="" />
      </p>
    </section>

  )
}
