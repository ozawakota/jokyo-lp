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
          <li><a href="#case">眉アートメイク除去症例</a></li>
          <li><a href="#about">西川式除去とは？</a></li>
          <li><a href="#point">西川式除去のポイント</a></li>
          <li><a href="#price">料金表</a></li>
          <li><a href="#steps">施術当日の流れ</a></li>
          <li><a href="#access">アクセス</a></li>
          <li><a href="#qa">よくある質問</a></li>
        </ul>

        <ul className="l-header__submenu">
          <li>
            <a href="https://www.the-artmake-tokyo.tokyo/p_policy/" target="_blank" rel='noreferrer noopener'>プライバシーポリシー</a>
          </li>
          <li className="js-to-top"><a href="#">TOPへ戻る</a></li>
        </ul>

        <ul className="l-header__sns">
          <li className="insta">
            <a
              href="https://www.instagram.com/artmake_removal/"
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
              /><noscript><img
                src="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/common/icon_sns_insta.svg"
                width="20"
                alt="Instagram"
                data-eio="l"
              /></noscript>
            </a>
          </li>
          <li className="tiktok">
            <a
              href="https://www.tiktok.com/@theartmaketokyo?_t=ZS-8xfPgs8hZ0U&_r=1"
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
        <div className={clsx(styles['l-header__more'])}>
          <p>除去について、もっと知りたい方へ</p>
          <a
            href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/artist/dr-%e3%83%80%e3%82%a4%e3%83%81/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              医師による症例解説
            </span>
          </a>
        </div>
      </nav>
    </header>


  )
}
