import React from 'react'
import styles from './Case.module.scss'
import clsx from 'clsx'


export const Case: React.FC = () => {
  return (
    <section className={clsx(styles['p-lp-case'])} id="case">
      <div className="p-lp-case__header">
        <p className="c-heading c-heading--en">
          <span className="underline">CASE</span>
        </p>
        <h2 className={clsx(styles['c-heading'])}>
          <img src="/assets/images/lp/case/case-head.webp" alt="" />
          <span>眉アートメイク症例</span>
        </h2>
      </div>

      <ul className="c-case-list p-lp-case__list js-case-slider">
        <li className="c-case-list__item">
          <img
            className="c-image--responsive"
            data-lazy="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/lp/case/img_case01.webp"
            alt=""
          />
        </li>
        <li className="c-case-list__item">
          <img
            className="c-image--responsive"
            data-lazy="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/lp/case/img_case02.webp"
            alt=""
          />
        </li>
        <li className="c-case-list__item">
          <img
            className="c-image--responsive"
            data-lazy="https://tat1234.xsrv.jp/wp/wp-content/themes/the-artmake-tokyo/assets/images/lp/case/img_case03.webp"
            alt=""
          />
        </li>
      </ul>

      <div className={clsx(styles['p-lp-case__contents'])}>
        <img src="/assets/images/lp/case/case-img1.webp" alt="" />
        <div className={clsx(styles['p-lp-case__sns'])}>
          <a href="https://www.instagram.com/artmake_removal/" className={clsx(styles['instagram'])}>
            <span>公式Instagramを見る</span>
          </a>
        </div>
        <div className={clsx(styles['p-lp-case__more'])}>
          <p className={clsx(styles['text'])}>
            <span>もっと知りたい方へ</span>
          </p>
          <ul className={clsx(styles['list'])}>
            <li>
              <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/post/removal-2/">
                <span>過去のアートメイク除去で眉毛が黒い女性｜<br />自然に馴染む色への他院修正</span></a>
            </li>
            <li>
              <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/post/removal-3/">
                <span>他院のアートメイク除去でオレンジに退色した<br />眉アートを自然なカラーに修正</span></a>
            </li>
            <li>
              <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/post/removal-4/">
                <span>灰色で目立つ眉アートメイクを除去！<br />キレイな眉毛に</span></a>
            </li>
          </ul>
          <p className={clsx(styles['c-right'])}>
            <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/" className={clsx(styles['link'])}>コラム一覧を見る</a>
          </p>


        </div>
      </div>

      <div>
        <img src="/assets/images/lp/case/case-img2.webp" alt="" />
      </div>

    </section>

  )
}
