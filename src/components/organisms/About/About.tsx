import React from 'react'
import styles from './About.module.scss'
import clsx from 'clsx'


export const About: React.FC = () => {
  return (
    <section className={clsx(styles['p-lp-about'])} id="about">
      <p className="c-center">
        <img src="./assets/images/lp/about/about-img.webp" alt="" />
      </p>
      <p className={clsx(styles['p-lp-about__img'])}>
        <img src="./assets/images/lp/about/about-img2.webp" alt="" />
      </p>

    </section>

  )
}
