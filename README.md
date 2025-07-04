# プロジェクトテンプレート

## 環境構築

```bash
npm -v 10.7.0
node バージョンは 20 以上 # .nvmrcで切り替え (nvm use)
astro バージョン 5.9.4
```

## 起動

```bash
npm i # または pnpm i を実行
npm run dev # 開発サーバーを立ち上げる (ターミナル : o →でブラウザが開く ,h → ヘルプ)
npm run build # distフォルダ内にコンパイル
```

## フォルダ・ファイル概要

```text
.
├── README.md                         ・・・ プロジェクト概要ファイル
├── astro.config.mjs                  ・・・ astro設定ファイル
├── .husky                            ・・・ コード品質ファイル
├── dist                              ・・・ ビルド先フォルダ
├── eslint.config.js                  ・・・ ESlintの機能拡張ファイル
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── public　　　　　　　　　　　　　　     ・・・ コード以外の処理不要のアセット（フォント、アイコンなど）
├── src　　　　　　　　　　　　　　　　    ・・・ プロジェクトソースコード（コンポーネント、ページ、スタイル、画像など）
│   ├── assets
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   ├── images
│   │   └── scss　　　　　　　　　　　　   ・・・ scss変数格納フォルダ
│   │       ├── _color-variables.scss
│   │       ├── _font-variables.scss
│   │       └── index.scss
│   ├── components
│   │   ├── atoms
│   │   ├── organisms
│   │   │   └── Header
│   │   │       ├── Header.tsx
│   │   │       └── index.ts
│   │   └── templates
│   │       ├── about
│   │       │   ├── index.module.scss
│   │       │   └── index.tsx
│   │       └── home
│   │           ├── index.module.scss
│   │           └── index.tsx
│   ├── layouts
│   │   ├── Layout.astro
│   │   └── layout.module.scss
│   └── pages
│       ├── about.astro
│       ├── contact-form.astro
│       └── index.astro
└── tsconfig.json                   ・・・ TypeScriptの設定ファイル
```
