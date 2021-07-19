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
- Unit Test: [Jest](https://jestjs.io/), [moxios](https://github.com/axios/moxios), [testing-library](https://testing-library.com/)
- Coding Style： [Eslint](https://eslint.org/)

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

  學習 react, react router dom 就是必修課！之前有實現 modal gallery，才發現 router 有很多玩法ＸＤ

### Axios

- 功能簡介：

  處理 AJAX 的輕量Ｈ TTP 請求工具，不限於瀏覽器，在 node.js 也可以使用。支援防止 CSRF、可以自動轉換 JSON 資料等

- 個人理解＆感想：

  使用 axios 就回不去 fetchAPI 了！串接 API 的寫法直覺，而且徹底擺脫 json()（歡呼

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

  之前 React 轉 16 不用再 import React 覺得超方便，現在環境設定踩雷後，才知道是透過 babel 轉譯的，不然還是會報錯。 因為也是第一次實作，搭配上 webpack，有時候會不知道是 webpack 還是 babel 問題（心累

### React Loadable

- 功能簡介：

  為了避免 bundle 過大，把 bundle 拆分成幾個小的 bundle, code-splitting 可以延遲/避免載入使用者不需要的程式碼，減少第一次進到網頁的載入時間。
  目前專案只實做 Page 的 dynamic loading。

- 個人理解＆感想：

  code splitting 是第一次實作。在之前讀書會有稍微提過 react.lazy，而在查資料的過程中得知 React.lazy 不能在 SSR 中使用，因此決定使用 loadable！

  因為只 splitting page 的載入所以大小可能沒有差太多，將 index.bundle.js 從 3.2MB 變成 2.5MB（listpage:15.3KB, profilepage:22.1KB)

### Unit Test (Jest, moxios, testing-library)

- 功能簡介：

  『 Legacy code is simply code without tests 』-- Michael Feathers

  寫測試可以節省手動測試的時間，並可以做自動化驗證。而 Unit Test 因為關注點較小，可以更明確找出問題點。

  - Jest: 著名測試框架之一，與 React 整合度高」
  - moxios: axios 的測試，mock axios 的行爲但不會發送請求，使測試環境更乾淨
  - testing-library: 做 component 測試整合度高，更新較快

- 個人理解＆感想：

  單元測試算是自己還未學習完全的領域，目前只完成 api.test.js。

  之前 api 測試都是直接發送 request，但這樣很有可能後端出問題前端測試過不了。因此在找資料過程中得知 mock api 的方法，而 axios 也有提供其測試的套件。

  原本想做 App.test.js 的 router 測試，但是在測試過程中出現 webpack 的錯誤，考量時間成本忍痛放棄。
  未來會先在 create-react-app 環境下先練習 unit test，才會在 webpack 環境下練習。

### Eslint

- 功能簡介：
  一個程式碼的大眾規範，提升程式碼品質且幫助整合 coding style

## 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

1. 撰寫有關教複雜商業邏輯、流程控制的時候（之前工作上要撰寫關於車牌號碼的輸入設定，檢驗複雜需要許多 if/else，加上政策朝夕令改，這時就很感謝前人有寫註解 XD)

2. [TO DO]因為在開發過程中可能有些功能是現在無法達成的，那就會寫[TO DO]來記錄以方便未來更新

3. 協同開發第一次遇見的較複雜資料處理時，可供其他同事需要參考（之前工作上若開發遇到新功能第一次處理，會在 trello 上標註並記錄，有時資料處理較複雜且多為命令式時會簡單用註解說明）

## 在這份專案中你遇到的困難、問題，以及解決的方法

### 減少渲染 HeroCard 的優化

- 前情提要：原本透過`useParams`的方式取得`heroId`，並透過`styled-components`傳參數的方法控制樣式，卻發現因為`useParams`改變等於四個 Card 都會改變。
- 目標：達到只有兩個 Card 的渲染（無到有、有到無）
- 困難：最一開始其實不知道`useRouteMatch`，因為後來設計`ListPage`在 Switch 外面所以無法透過`useParams`拿到`heroId`，不想使用 location 字串判斷的方式(感覺失去 params 的意義)，所以笨笨的使用 currentId 的方式在渲染`ProfilePage`儲存在`Context`裡。雖然成功只渲染兩個，但是當網頁 goback 回`ListPage`的時候因為`ProfilePage`被拔除所以無法改變 Context 的 currentId 為 null。最後覺得 router 的問題應該 router 可以解決才對！才再回去官網找到`useRouteMatch`！！
- 最終方法：傳參數的方式並用 memo 優化 + 使用 react-router 的`useRouteMatch`

### Loadable

- 目的：code splitting
- 困難：首次嘗試 loadable 使用 code splittng，雖然成功 bundle 但是卻抱錯`The tag is unrecognized in this browser.`
- 解決：回傳值我回傳字串但套件要求要回傳 DOM 的原因

### Webpack 設定

這個真的太多坑了，每一步都踩在地雷上的感覺 QQ 講其中印象比較深刻的兩個

- 問題 1：一進入網站就重複渲染兩次，開 devtool 檢查發現 html 載入兩個 index.bundle.js 檔案
- 困難 1：網路上找到是`HtmlWebpackPlugin`的關係，只要 build 就會自動放到 html 檔，但是我自身開發是使用 webpack server 所以又會再放一次。多數在 stackoverflow 都說 build 完後再去 html 拿到那個 script，但我覺得怪怪的因為 HtmlWebpackPlugin 就是要幫你自動打包，因此再動 html 好像失去意義
- 解決 1：爬了多個文章後發現加`inject: false`解決這問題！！！！

- 問題 2：透過 PageList 點 Link 可以成功切換 route，但在重新整理後卻發現 404
- 困難 2：一開始沒有發現是 webpack 設定問題，以為是 route 問題 debug 一段時間。
- 解決 2：`output.publicPath = '/'` + `devServer.historyApiFallback = true`，[StackOverFlow](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually)講解很清楚

### Babel 設定

- 問題 1：因為在 create-react-app 中 React 16 不需要 import React，所以本來很開心都沒 import。殊不知抱錯`React is not defined`
- 困難 1：原本以為又是 webpack 的錯，debug 一段時間！
- 解決 1：發現在`@babel/preset-react`中的 runtime 要改成 automatic!因為預設是 classic 不會自動 import([官網](https://babeljs.io/docs/en/babel-preset-react#runtime)))

## 總結

在撰寫時邏輯的原因：

1. 將拿過的 profile 資料放到 context 裡，其一是在減少 request 次數，其二是可以在存取在未儲存的狀態
2. 選擇 button 不用 disabled 而是 show message 的原因是讓使用者清楚知道點數增減的邏輯是基於剩餘點數決定

可優化方向：

1. 沒有做完善的錯誤處理（目前只用 AntDesign Result 的 Error 元件，而沒有分別出 404、500 等差異）
2. 目前假設都是後端給的資料如預期，沒有做檢測
3. 更完善的 Unit Test
4. 使用 SSR
