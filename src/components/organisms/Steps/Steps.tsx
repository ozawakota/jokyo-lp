import React from 'react'
import styles from './Steps.module.scss'
import clsx from 'clsx'


export const Steps: React.FC = () => {
  return (
    <section className="p-lp-steps" id="steps">
      <div className="p-lp-__header p-lp-steps__header">
        <p className="c-heading c-heading--en">
          <span className="underline">STEP</span>
        </p>
        <h2 className="c-heading">施術当日の流れ</h2>
      </div>

      <ol className="p-lp-steps__list js-steps-slider">
        <li className="p-lp-steps__list-item">
          <p className="number"><span>01</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps01.webp"
              alt=""
            />
          </p>
          <p className="title">カウンセリング</p>
          <p className="text">
            今までのアートメイク歴や、施術に関するご希望などをカウンセリングさせていただきます。<br />
            その他ご不安、疑問など、些細なことでもお気持ちをぜひお聞かせください。
          </p>
        </li>
        <li className="p-lp-steps__list-item">
          <p className="number"><span>02</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps02.webp"
              alt=""
            />
          </p>
          <p className="title">
            アートメイク除去に<br />ついての説明
          </p>
          <p className="text">
            アートメイク除去ってどんな施術なの？<br />回数や費用、ダウンタイム等について詳しい内容をご紹介いたします。
          </p>
        </li>
        <li className="p-lp-steps__list-item">
          <p className="number"><span>03</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps03.webp"
              alt=""
            />
          </p>
          <p className="title">医師による診察</p>
          <p className="text">
            医師による診察で安全にアートメイク除去を行っていただけるかを確認していきます
          </p>
        </li>
        <li className="p-lp-steps__list-item">
          <p className="number"><span>04</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps04.webp"
              alt=""
            />
          </p>
          <p className="title">同意書の取得・会計</p>
          <p className="text">
            診察で問題がなければ問診票をご記入いただき、お会計をさせていただきます。
          </p>
        </li>
        <li className="p-lp-steps__list-item">
          <p className="number"><span>05</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps05.webp"
              alt=""
            />
          </p>
          <p className="title">塗る麻酔</p>
          <p className="text">
            ご希望があれば、施術部位に塗る麻酔を塗布しお痛みをカバーします。<br />
            （お痛みはそこまで強くないので、麻酔無しで施術をする方も多いです。）

          </p>
        </li>
        <li className="p-lp-steps__list-item">
          <p className="number"><span>06</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps06.webp"
              alt=""
            />
          </p>
          <p className="title">施術</p>
          <p className="text">
            ピコレーザーを使用し、施術を行います。
          </p>
        </li>
        <li className="p-lp-steps__list-item">
          <p className="number"><span>07</span></p>
          <p className="image">
            <img
              data-lazy="./assets/images/lp/steps/img_steps07.webp"
              alt=""
            />
          </p>
          <p className="title">アフターケア</p>
          <p className="text">
            施術後の経過や過ごし方についてご案内いたします。<br />
            次回のご予約もお決まりでしたらお取りいただけます。

          </p>
        </li>

      </ol>

    </section>


  )
}
