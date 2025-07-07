import React, { useState, useEffect } from 'react'
import styles from './Aside.module.scss'
import clsx from 'clsx'

export const Aside: React.FC = () => {
  const [qrImageSrc, setQrImageSrc] = useState('./assets/images/lp/aside/img-QR.webp')
  const [qrImageAlt, setQrImageAlt] = useState('デフォルトQRコード')

  useEffect(() => {
    // クライアントサイドでURLパラメータをチェック
    const urlParams = new URLSearchParams(window.location.search)
    const media = urlParams.get('media')

    if (media === 'gs') {

      setQrImageSrc('./assets/images/lp/aside/img-QR-gs.webp')
      setQrImageAlt('Google Search用QRコード')
    } else if (media === 'insta') {
      setQrImageSrc('./assets/images/lp/aside/img-QR-insta.webp')
      setQrImageAlt('Instagram用QRコード')
    } else {
      setQrImageSrc('./assets/images/lp/aside/img-QR.webp')
      setQrImageAlt('デフォルトQRコード')
    }
  }, [])

  return (
    <aside className="l-aside u-pc">
      <div className="l-aside__inner">
        <div className={clsx(styles['c-aside-reserve'])}>
          <p className={clsx(styles['c-reserve__label'])}>RESERVATION</p>
          <p
            className="c-speech-bubble c-speech-bubble--gray c-speech-bubble--square c-aside-reserve__bubble"
          >
            <span className={clsx(styles['c-speech-bubble__text'])}
            >お得なモニター割引実施中</span>
          </p>
          <h2 className={clsx(styles['c-aside-reserve__heading'])}>
            空席カレンダー・<br />ご予約はこちら
          </h2>

          <img
            className={styles.logoImage}
            src={qrImageSrc}
            alt={qrImageAlt}
          />

        </div>
      </div>
    </aside>
  )
}