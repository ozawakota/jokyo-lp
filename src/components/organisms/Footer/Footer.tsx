import React, { useState, useEffect } from 'react'
import styles from './Footer.module.scss'

import clsx from 'clsx'

export interface Props {
  /** クラス名 */
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  const [lineUrl, setLineUrl] = useState('https://lin.ee/mDOfD9v')

  useEffect(() => {
    // クライアントサイドでURLパラメータをチェック
    const urlParams = new URLSearchParams(window.location.search)
    const media = urlParams.get('media')

    if (media === 'gs') {
      setLineUrl('https://lin.ee/HmoE4ZS')
    } else if ((media === 'insta')) {
      setLineUrl('https://lin.ee/YvaS1lyC')
    } else {
      setLineUrl('https://lin.ee/mDOfD9v')
    }
  }, [])

  return (
    <footer className="l-footer">
      <div className="c-to-top js-to-top">
        <a className="c-to-top__button">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="16"
            alt="PAGE TOP"
            data-src="./assets/images/common/arrow_top.svg"
            decoding="async"
            className="lazyload"
          /><noscript><img
            src="./assets/images/common/arrow_top.svg"
            width="16"
            alt="PAGE TOP"
            data-eio="l"
          /></noscript>
        </a>
      </div>

      <div className="l-footer__logo">
        <img
          className="c-image--responsive lazyload"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          width="145"
          alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
          data-src="./assets/images/common/logo_tat_white.svg"
          decoding="async"
        /><noscript><img
          className="c-image--responsive"
          src="./assets/images/common/logo_tat_white.svg"
          width="145"
          alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
          data-eio="l"
        /></noscript>
      </div>

      <ul className="l-footer__clinic-list">
        <li>
          <a href="https://www.the-artmake-tokyo.tokyo/brow/ginza">銀座院</a>
        </li>
        <li>
          <a href="https://www.the-artmake-tokyo.tokyo/brow/osaka">大阪院</a>
        </li>
        <li>
          <a href="https://www.the-artmake-tokyo.tokyo/brow/nagoya">名古屋院</a>
        </li>
        <li>
          <a href="https://www.the-artmake-tokyo.tokyo/brow/yokohama">横浜院</a>
        </li>
        <li>
          <a href="https://www.the-artmake-tokyo.tokyo/brow/fukuoka">福岡院</a>
        </li>
      </ul>

      <p className="l-footer__copyright">
        &copy; 2025 THE ARTMAKE TOKYO. All Rights Reserved.
      </p>

      <ul className={clsx(styles['l-footer__submenu'])}>
        <li className="l-footer__submenu-item">
          <a href="https://www.the-artmake-tokyo.tokyo/p_policy/" target="_blank">プライバシーポリシー</a>
        </li>
      </ul>

      <div className={clsx(styles['c-float-reserve'])}>
        <a className="c-float-reserve__link c-float-reserve__link--line" href={lineUrl} data-link>
          <span className="c-speech-bubble c-speech-bubble--white c-float-reserve__bubble">
            <span className="c-speech-bubble__text">お得なモニター募集中！</span>
          </span>
          <span className="c-float-reserve__title">空席カレンダー&amp;予約する</span>
        </a>
      </div>
    </footer >
  )
}