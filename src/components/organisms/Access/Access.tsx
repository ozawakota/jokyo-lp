import React from 'react'
import styles from './Access.module.scss'
import clsx from 'clsx'


export const Access: React.FC = () => {
  return (
    <section className="p-lp-access" id="access">
      <div className="p-lp-access__header">
        <p className="c-heading c-heading--en">
          <span className="underline">ACCESS</span>
        </p>
        <h2 className="c-heading">アクセス</h2>
      </div>

      <div className="p-lp-access__accordion js-accordion">
        <h3 className="accordion-header js-accordion__header">
          <span className="label">銀座院</span><span className="icon"></span>
        </h3>
        <div className="accordion-body js-accordion__body">
          <div className="p-lp-access__map">
            <p>
              <iframe
                width="600"
                height="450"

                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.329276592765!2d139.76846300000003!3d35.674975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4557c82ad7%3A0xd0bb6c4af31a6538!2zVEhFIEFSVE1BS0UgVE9LWU8g6YqA5bqn!5e0!3m2!1sja!2sus!4v1714636665074!5m2!1sja!2sus"
                className="lazyload"></iframe>
            </p>
          </div>
          <ul className="p-lp-access__info">
            <li className="clinic"><span>THE ARTMAKE TOKYO 銀座院</span></li>
            <li className="address">
              <h4>住所</h4><span
              >東京都中央区銀座１丁目２−４<br />
                サクセス銀座ファースト7階</span>
            </li>
            <li className="access">
              <h4>アクセス</h4><span
              >銀座一丁目駅 ７番出口（徒歩1分）<br />
                京橋駅 3番出口（徒歩1分）<br />
                JR有楽町駅 京橋口（徒歩6分）</span>
            </li>
            <li className="tel">
              <h4>電話番号</h4><span>050-1807-2572</span>
            </li>
            <li className="hour"><span>営業時間：10:00～19:00（予約制）</span></li>
          </ul>
        </div>
      </div>
      <div className="p-lp-access__accordion js-accordion">
        <h3 className="accordion-header js-accordion__header">
          <span className="label">大阪院</span><span className="icon"></span>
        </h3>
        <div className="accordion-body js-accordion__body">
          <div className="p-lp-access__map">
            <p>
              <iframe
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13119.7492566482!2d135.49928700000004!3d34.706761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e746722661d9%3A0x5465811dcac5755f!2zVEhFIEFSVE1BS0UgVE9LWU8g5aSn6Ziq6Zmi!5e0!3m2!1sja!2sjp!4v1714636758790!5m2!1sja!2sjp"
                className="lazyload"></iframe>
            </p>
          </div>
          <ul className="p-lp-access__info">
            <li className="clinic"><span>THE ARTMAKE TOKYO 大阪院</span></li>
            <li className="address">
              <h4>住所</h4><span
              >大阪府大阪市北区曾根崎新地１-4-12<br />
                桜橋プラザビル B1F</span
              >
            </li>
            <li className="access">
              <h4>アクセス</h4>
              <span>JR大阪駅 桜橋出口 徒歩5分<br />
                JR東西線北新地駅 西出口 徒歩1分<br />
                (11-5番出口すぐ)<br />
                地下鉄四つ橋線西梅田駅 徒歩2分<br />
                (8番出口方面C-60左手階段すぐ)</span>
            </li>
            <li className="tel">
              <h4>電話番号</h4><span>050-1807-2572</span>
            </li>
            <li className="hour"><span>営業時間：10:00〜19:00</span></li>
          </ul>
        </div>
      </div>
    </section>

  )
}
