import React from 'react'
import styles from './Header.module.scss'
import clsx from 'clsx'

export interface Props {
  /** クラス名 */
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className="l-header js-header">
      <p className="l-header__logo">
        <a href="https://tat1234.xsrv.jp/">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="184"
            alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
            data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/logo_tat.svg"
            decoding="async"
            className="lazyload"
          />
          <noscript>
            <img
              src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/logo_tat.svg"
              width="184"
              alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
              data-eio="l"
            />
          </noscript>
        </a>
      </p>

      <div className="l-header__open js-nav-open"><span></span><span></span></div>

      <nav className="l-header__nav js-nav">
        <div className="l-header__logo u-sp">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width="145"
            alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
            data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/logo_tat.svg"
            decoding="async"
            className="lazyload"
          />
          <noscript>
            <img
              src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/logo_tat.svg"
              width="145"
              alt="THE ARTMAKE TOKYO（ジ・アートメイク東京）"
              data-eio="l"
            />
          </noscript>
        </div>
        <div className="l-header__close js-nav-close">
          <span></span><span></span>
        </div>

        <div className="l-header__menu-heading u-pc"><span>MENU</span></div>
        <ul className="l-header__list">
          <li><a href="#about">THE ARTMAKE TOKYOの人気スタイル</a></li>

          <li><a href="#choice">クリニック選び</a></li>
          <li><a href="#case">眉アートメイク症例</a></li>

          <li><a href="#commitment">THE ARTMAKE TOKYOのこだわり</a></li>
          <li><a href="#artist">アーティスト一覧</a></li>


          <li><a href="#doctor">院長紹介</a></li>

          <li><a href="#feature">THE ARTMAKE TOKYOの特徴</a></li>
          <li><a href="#price">料金表</a></li>
          <li><a href="#reason">選ばれる理由</a></li>
          <li><a href="#steps">施術当日の流れ</a></li>

          <li><a href="#clinic">クリニック情報</a></li>
          <li><a href="#access">アクセス</a></li>

          <li><a href="#qa">Q&A</a></li>
        </ul>

        <ul className="l-header__submenu">
          <li>
            <a href="https://tat1234.xsrv.jp/p_policy/" target="_blank"
            >プライバシーポリシー
            </a>
          </li>
          <li className="js-to-top"><a href="#">TOPへ戻る</a></li>
        </ul>

        <ul className="l-header__sns">
          <li className="insta">
            <a
              href="https://www.instagram.com/the_artmake_tokyo/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="20"
                alt="Instagram"
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_sns_insta.svg"
                decoding="async"
                className="lazyload"
              /><noscript
              ><img
                  src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_sns_insta.svg"
                  width="20"
                  alt="Instagram"
                  data-eio="l"
                /></noscript
              >
            </a>
          </li>
          <li className="tiktok">
            <a
              href="https://www.tiktok.com/@theartmaketokyo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                width="17"
                alt="tiktok"
                data-src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_sns_tiktok.svg"
                decoding="async"
                className="lazyload"
              />
              <noscript>
                <img
                  src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_sns_tiktok.svg"
                  width="17"
                  alt="tiktok"
                  data-eio="l"
                />
              </noscript>
            </a>
          </li>
        </ul>
      </nav>
    </header>


  )
}
