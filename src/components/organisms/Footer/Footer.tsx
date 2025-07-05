import React from 'react'
import styles from './Footer.module.scss'

import clsx from 'clsx'

export interface Props {
  /** クラス名 */
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className="l-footer">
      <div className="c-to-top js-to-top">
        <a className="c-to-top__button">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="16"
            alt="PAGE TOP"
            data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/arrow_top.svg"
            decoding="async"
            className="lazyload"
          /><noscript><img
            src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/arrow_top.svg"
            width="16"
            alt="PAGE TOP"
            data-eio="l"
          /></noscript>
        </a>
      </div>

      <nav className="l-footer__nav">
        <ul className="l-footer__menu">
          <li>
            <a href="https://tat1234.xsrv.jp/faq/" target="_blank">
              <img
                className="icon lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="16"
                alt=""
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_faq.svg"
                decoding="async"
              /><noscript><img
                className="icon"
                src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_faq.svg"
                width="16"
                alt=""
                data-eio="l"
              /></noscript>
              よくある質問
            </a>
          </li>
          <li>
            <a href="https://tat1234.xsrv.jp/price/" target="_blank">
              <img
                className="icon lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="16"
                alt=""
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_price.svg"
                decoding="async"
              /><noscript
              ><img
                  className="icon"
                  src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_price.svg"
                  width="16"
                  alt=""
                  data-eio="l"
                /></noscript
              >
              料金表
            </a>
          </li>
          <li>
            <a href="https://tat1234.xsrv.jp/artist-list/" target="_blank">
              <img
                className="icon lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="16"
                alt=""
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_artist.svg"
                decoding="async"
              /><noscript
              ><img
                  className="icon"
                  src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_artist.svg"
                  width="16"
                  alt=""
                  data-eio="l"
                /></noscript>
              アーティスト一覧
            </a>
          </li>
          <li>
            <a href="https://tat1234.xsrv.jp/recruit/" target="_blank">
              <img
                className="icon lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="16"
                alt=""
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_recruit.svg"
                decoding="async"
              /><noscript
              ><img
                  className="icon"
                  src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_recruit.svg"
                  width="16"
                  alt=""
                  data-eio="l"
                /></noscript>
              採用情報
            </a>
          </li>
          <li>
            <a href="https://tat1234.xsrv.jp/removal/" target="_blank">
              <img
                className="icon lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="16"
                alt=""
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_removal.svg"
                decoding="async"
              /><noscript><img
                className="icon"
                src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_removal.svg"
                width="16"
                alt=""
                data-eio="l"
              /></noscript>
              レーザー除去
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSePthoLh8ghv633J_znYgPGXDfQ7YyYu6E7gPrtWbg-WJYUrg/viewform" target="_blank">
              <img
                className="icon lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="16"
                alt=""
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_letter.svg"
                decoding="async"
              /><noscript
              ><img
                  className="icon"
                  src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_letter.svg"
                  width="16"
                  alt=""
                  data-eio="l"
                /></noscript>
              メディア関係の方へ
            </a>
          </li>
        </ul>
      </nav>

      <div className="l-footer__logo">
        <img
          className="c-image--responsive lazyload"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          width="145"
          alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
          data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/logo_tat_white.svg"
          decoding="async"
        /><noscript><img
          className="c-image--responsive"
          src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/logo_tat_white.svg"
          width="145"
          alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
          data-eio="l"
        /></noscript>
      </div>

      <ul className="l-footer__clinic-list">
        <li>
          <a href="https://tat1234.xsrv.jp/brow/ginza">銀座院</a>
        </li>
        <li>
          <a href="https://tat1234.xsrv.jp/brow/osaka">大阪院</a>
        </li>
        <li>
          <a href="https://tat1234.xsrv.jp/brow/nagoya">名古屋院</a>
        </li>
        <li>
          <a href="https://tat1234.xsrv.jp/brow/yokohama">横浜院</a>
        </li>
        <li>
          <a href="https://tat1234.xsrv.jp/brow/fukuoka">福岡院</a>
        </li>
      </ul>

      <p className="l-footer__copyright">
        &copy; 2025 THE ARTMAKE TOKYO. All Rights Reserved.
      </p>

      <ul className={clsx(styles['l-footer__submenu'])}>
        <li className="l-footer__submenu-item">
          <a href="https://tat1234.xsrv.jp/p_policy/" target="_blank">プライバシーポリシー</a>
        </li>
      </ul>

      <div className={clsx(styles['c-float-reserve'])}>
        <a className="c-float-reserve__link c-float-reserve__link--line no-scroll" href="#modal-line" data-effect="mfp-zoom-in">
          <span className="c-speech-bubble c-speech-bubble--white c-float-reserve__bubble">
            <span className="c-speech-bubble__text">お得なモニター募集中！</span>
          </span>
          <span className="c-float-reserve__title">空席カレンダー&amp;予約する</span>
        </a>
      </div>
    </footer >
  )
}
