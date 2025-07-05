import React from 'react'
import styles from './Question.module.scss'
import clsx from 'clsx'


export const Question: React.FC<Props> = () => {
  return (
    <section className={clsx(styles['p-lp-qa'])} id="qa">
      <div className="p-lp-qa__header">
        <p className="c-heading c-heading--en">
          <span className="underline">Q&A</span>
        </p>
        <h2 className="c-heading">よくある質問</h2>
      </div>

      <ol className="p-lp-qa__list">
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q1.</span>
            <p className="question">何回くらい除去レーザーをしますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A1.</span>
            <p className={clsx(styles.answer)}>
              色素の種類・量・深さと目的によって必要な回数がことなります。
              <br />
              <br />
              <strong>【黒のみ・少ない・浅い場合】</strong><br />
              1回でかなり薄くなります。<br /><br />

              <strong>【入れ直し目的の場合】</strong><br />
              黒＋赤＋黄色・量が普通・深さが普通のかたは、3-4回程度入れ直しに移行される方が一般的です。<br /><br />
              色素量が多くなる、色素の定着位置が深くなればなるほど、回数が増えていく傾向にあります。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q2.</span>
            <p className="question">
              痛みはありますか？
            </p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A2.</span>
            <p className="answer">
              <strong>【眉】</strong><br />
              輪ゴムで弾かれるような痛みがございます。<br />
              ご希望の方は、クリーム麻酔などをしてから施術を行うこともできます。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q3.</span>
            <p className="question">
              翌日から仕事に行けますか？
            </p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A3.</span>
            <p className="answer">
              翌日から通常通りの生活が可能です。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q4.</span>
            <p className="question">メイクは、いつからできますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A4.</span>
            <p className="answer">
              多くの方が翌日からメイクができます。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q5.</span>
            <p className="question">テスト照射は受けられますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A5.</span>
            <p className="answer">
              テスト照射プランがございます。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q6.</span>
            <p className="question">除去後に再度アートメイクできますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A6.</span>
            <p className="answer">
              アートメイク可能です。入れ直しを目的に除去施術を受けられる方は多いです。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q7.</span>
            <p className="question">黒く変色することがありますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A7.</span>
            <p className="answer">
              発生することがございます。<>br</>
              西川式では黒い変色の発生確率を下げるため、マルチパス方式を採用しています。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q8.</span>
            <p className="question">どんな副反応が起こる可能性がありますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A8.</span>
            <p className="answer">
              施術直後は赤みが発生することが多いですが、数時間で回復することがほとんどです。<br />
              1%以下の確率ですが、水疱が発生する場合がございます。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q9.</span>
            <p className="question">内出血はありますか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A9.</span>
            <p className="answer">
              西川式の場合、内出血がでることが少ないです。<br /><br />

              一部、皮膚の深い位置にある色素の除去や黄い色素の除去の際に内出血を伴う施術をご案内する場合がございます。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q10.</span>
            <p className="question">どんな人は施術を受けられませんか？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A10.</span>
            <p className="answer">
              ご妊娠中の方などは施術を控えさせていただくことがあります。
            </p>
          </div>
        </li>
        <li className="p-lp-qa__accordion js-accordion">
          <div className="accordion-header js-accordion__header">
            <span className="q-number">Q11.</span>
            <p className="question">施術後のケア方法は？</p>
          </div>
          <div className="accordion-body js-accordion__body">
            <span className="a-number">A11.</span>
            <p className="answer">
              当日は、施術部位を触れないようにしていただきます。<br />
              翌日以降は普段通りの生活が可能で、特別なケアは不要です。
            </p>
          </div>
        </li>
      </ol>

      <div className="p-lp-qa__button">
        <a
          className="c-button c-button--arrow c-button--light"
          href="https://www.the-artmake-tokyo.tokyo/faq/#faq_removel"
          target="_blank">
          <span className="c-button__text">もっと見る</span>
        </a>
      </div>
    </section>

  )
}
