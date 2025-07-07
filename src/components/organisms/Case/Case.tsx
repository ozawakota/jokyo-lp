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
          <img src="./assets/images/lp/case/case-head.webp" alt="" />
          <span>眉アートメイク除去症例</span>
        </h2>
      </div>

      <ul className="c-case-list p-lp-case__list js-case-slider">
        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case01.webp"
            alt=""
          />
          <p>
            一部（眉頭の1本）だけ調整したい<br /><br />
            除去回数：1回
          </p>
        </li>
        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case02.webp"
            alt=""
          />
          <p>
            古いアートメイクを完全に消したい<br /><br />
            除去回数：4回
          </p>

        </li>
        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case03.webp"
            alt=""
          />
          <p>
            濃く入れたアートメイクを自然にトーンダウンしたい<br /><br />
            除去回数：1回
          </p>

        </li>
        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case04.webp"
            alt=""
          />
          <p>
            他院で照射した部分の黒ずみをなんとかしたい<br /><br />
            除去回数：3回
          </p>

        </li>

        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case05.webp"
            alt=""
          />
          <p>
            眉山の形を整えたい<br /><br />
            除去回数：2回
          </p>

        </li>

        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case06.webp"
            alt=""
          />
          <p>
            眉頭まわりの黄ばみをクリアにしたい<br /><br />
            除去回数：2回
          </p>

        </li>

        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case07.webp"
            alt=""
          />
          <p>
            眉尻だけふんわり薄くしたい<br /><br />
            除去回数：1回
          </p>

        </li>

        <li className={clsx(styles['c-case-list__item'])}>
          <img
            className="c-image--responsive"
            data-lazy="./assets/images/lp/case/img_case08.webp"
            alt=""
          />
          <p>
            全体の色が濃すぎるので、自然にしたい<br />
            除去回数：2回
          </p>

        </li>

      </ul>

      <div className={clsx(styles['p-lp-case__contents'])}>
        <img src="./assets/images/lp/case/case-img1.webp" alt="" />
        <div className={clsx(styles['p-lp-case__sns'])}>
          <a href="https://www.instagram.com/artmake_removal/" className={clsx(styles['instagram'])}>
            <span>公式Instagramを見る</span>
          </a>
        </div>
        <div className={clsx(styles['p-lp-case__more'])}>
          <p className={clsx(styles['text'])}>
            <span>除去について、もっと知りたい方へ</span>
          </p>
          <ul className={clsx(styles['list'])}>
            <li>
              <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/post/removal-2/">
                <span>過去のアートメイク除去で眉毛が黒い女性｜<br />自然に馴染む色への他院修正</span>
              </a>
            </li>
            <li>
              <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/post/removal-3/">
                <span>他院のアートメイク除去でオレンジに退色した<br />眉アートを自然なカラーに修正</span>
              </a>
            </li>
            <li>
              <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/post/removal-4/">
                <span>灰色で目立つ眉アートメイクを除去！<br />キレイな眉毛に</span>
              </a>
            </li>
          </ul>
          <p className={clsx(styles['c-right'])}>
            <a href="https://www.the-artmake-tokyo.tokyo/artmaketerrace/" className={clsx(styles['link'])}>コラム一覧を見る</a>
          </p>


        </div>
      </div>

      <div>
        <img src="./assets/images/lp/case/case-img2.webp" alt="" />
      </div>

    </section>

  )
}
