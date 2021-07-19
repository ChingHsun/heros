# Hahow Recruiment Project

Demo Website: <https://marvel-hahow.netlify.app>

Recruiment Project by Hahow ([FrontEnd](https://instameme-7d4c3.web.app/))

## 我們該如何執行完成的 package

```bash
git clone https://github.com/ChingHsun/hahow.git
cd hahow-recruit
yarn
yarn start
```

## 專案的架構、Web 的架構邏輯

```bash
├── src/
│   ├── components/
│   │   ├── context/
│   │   │   └── **/*.jsx      # 需要共享的context state
│   │   └──  **/*.jsx         # 所有可重複利用、拆分的元件
│   ├── imgs/
│   ├── pages/
│   │   └── **/*.jsx          # 頁面元件
│   ├── utils/
│   │   └── **/*.js           # 非元件、可共用的邏輯或資料(ex: API)
│   ├── App.js                # 包覆整體 App 需要的元件(ex: Provider)、應用的路由管理
│   └──index.js               # 掛載到 HTML DOM 的進入點
├── dist/
├── node_modules/
├── .babelrc                  # babel設定檔
├── .eslintrc.json            # eslint設定檔
├── webpack.config.js         # webpack設定檔
├── README.md
├── package.json
├── yarn.lock
└── .gitignore
```

## 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

- Framework: React with React Hooks
- UI Library： [Styled Components](https://styled-components.com/)、[Ant Design](https://ant.design/)
- Router： [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- HTTP： [Axios](https://axios-http.com/docs/intro)
- Bundler: [Webpack](https://webpack.js.org/)
- Compiler: [Babel](https://babeljs.io/)
- Code Splitting: [React Loadable](https://github.com/jamiebuilds/react-loadable)
- Unit Test: [Jest](), [moxios](), [testing-library]()
- Coding Style： [Eslint]()

### Styled Components

- 功能簡介：

  styled-components 是一個 CSS-in-JS library，讓 CSS 樣式能直接寫在 component 中以方便管理。

- 個人理解＆感想：

  styled-components 的優點相當多，[官網](https://styled-components.com/docs/basics#motivation)也寫的很詳細。而個人較有感的是：

  - 可以針對 component 進行樣式管理並保持關注點 (效率增加很多)
  - 動態樣式可透過 props 管理
  - 支援 SASS。

  個人感覺的缺點則是：

  - component 在太多 styled-components 下感覺較雜亂(曾經想要將變數放到最下面, 但這樣不符合 eslint 規範)，而自己在開發中為了避免太多變數，會在最上層包 styled-components 並 SASS 的巢狀樣式（但這樣會有權重的問題, 也增加 debug 複雜度）
  - classname 獨一的亂數名稱有時會造成 debug 困難（特別是共同開發時）
  - 需要注意跨元件的 css 繼承（ex: position: relative/absolute)

### Ant Design

- 功能簡介：

  大眾的 UI library 之一，有許多現成樣式元件使開發者可以快速使用，而更能專注在商業邏輯。Table 功能強大，是許多後台管理網站的愛用 Library 之一。

- 個人理解＆感想：
  其實本專案不需要使用到兩個 UI Library, 使用 styled-components 綽綽有餘。
  選擇此框架的原因非常簡單，純粹是沒使用過想要嘗試，加上有徵才加分項目上（笑。
  可惜沒有使用到傳說中強大的 tabel

  個人感覺的優點是：

  - 排版邏輯跟 bootstrap 相似，可無痛理解
  - 元件使用快速方便

  個人感覺的缺點則是：

  - 樣式調整較不彈性，需要使用 inline style 或 style component 另外控制
  - Customize Theme: 因為是 webpack 新手，而 customize theme 需要設定 webpack。考量到時間成本，因此忍痛放棄

### React Router Dom

- 功能簡介：

  React 實現前端路由的第三方套件，提供 BrowserRouter 、Route、Link 等等元件，實現可以用操作 DOM 的方式來改變 path

- 個人理解＆感想：
  學習 react, react router dom 就是必修課！

  個人感覺的優點是：

  - 操作好上手，官網也寫得非常詳細
  -  之前有實現 modal gallery，才發現 router 有很多玩法ＸＤ

  個人感覺的缺點則是：目前感覺不到！！

### Axios

- 功能簡介：

  處理 AJAX 的輕量Ｈ TTP 請求工具，不限於瀏覽器，在 node.js 也可以使用。支援防止 CSRF、可以自動轉換 JSON 資料等

- 個人理解＆感想：
  使用 axios 就回不去 fetchAPI 了！

  個人感覺的優點是：

  - 串接 API 的寫法直覺，且不需要再使用 json()

  個人感覺的缺點則是：目前沒有！

### Webpack

- 功能簡介：

  JavaScript 模組打包工具。將所有資源視為模組後建立相依圖(dependency graph)，並視情況做解析（loader)後打包(bundle)。

- 個人理解＆感想：
  之前多次使用 create-react-app,因為是全家桶式的環境設定，造成許多大型依賴且不能直接設定 webpack，好處就是可以專心在應用開發上。

  這次的 hahow 專案決定使用 webpack 的原因其一是這次專案偏小，不太需要全家桶式的依賴。其二是雖然之前有學一點但沒有實際開發過，想了解環境架設並學習更多！

  個人感覺的優點是：

  - 模組打包透過 webpack 做管理，不需要一一啟動 loader
  -  只需要下載需要的套件與工具，輕量化應用

  個人感覺的缺點則是：

  - 學習曲線一開始非常高，網路很多文章，每個 webpack.config.js 寫法都不同。花了很多時間研究跟 debug ＱＱ

### Babel

- 功能簡介：

  Babel 是 JavaScript 的轉譯工具，使 JavaScript 可將新語法轉譯成目標環境可讀懂的舊語法。因為在各家瀏覽器的新語法相容性不一致，藉由 Babel 開發者可以用無後顧之憂地使用新語法。

- 個人理解＆感想：

  之前不知道 babel，現在才知道原來就是他讓 jsx 變成瀏覽器可以讀懂的 js 檔。
  官網的[Try it out](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBAKgJwJ6KTAvDAFASnQPgG8AoBAUygFcExsAeACwEZ8pkYBLWESqOgemb4cxAL5A&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.7&externalPlugins=)可以看到！

  個人感覺的優點是：

  - 之前 React 轉 16 不用再 import React 覺得超方便，現在環境設定踩雷後，才知道是透過 babel 轉譯的，不然還是會報錯。

  個人感覺的缺點則是：

  -  因為也是第一次實作，搭配上 webpack，有時候會不知道是 webpack 問題還是 babel 問題

### React Loadable

- 功能簡介：
  為了避免 bundle 過大，把 bundle 拆分成幾個小的 bundle, code-splitting 可以延遲/避免載入使用者不需要的程式碼，減少第一次進到網頁的載入時間。
  目前專案只實做 Page 的 dynamic loading。

- 個人理解＆感想：
  code splitting 是第一次實作。在之前讀書會有稍微提過 react.lazy，而在查資料的過程中得知 React.lazy 不能在 SSR 中使用，因此決定使用 loadable！

  個人感覺的優點是：

  - 覺得語法很方便
  -  之前有實現 modal gallery，才發現 router 有很多玩法ＸＤ

  個人感覺的缺點則是：目前感覺不到！！

## 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

## 在這份專案中你遇到的困難、問題，以及解決的方法
