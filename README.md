<h1 align="center">Welcome to react-cli 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/react-cli.svg">
</p>

> A traditional react + redux architecture project cli

## Why is react-cli ?

使用 CRA + react-app-rewired 作为脚手架
采用业界认可的 Redux + Redux-Saga 数据流架构 高度可配置的架构，脱离阿里 dva 舒适圈，让你不仅用的舒服，更重要的是理解你在做什么，背后的原理。
而且在一个团队里永远记住：约定大于配置。

## Features

CRA 自带的模块
Your environment will have everything you need to build a modern single-page React app:
* React, JSX, ES6, TypeScript and Flow syntax support.
* Language extras beyond ES6 like the object spread operator.
* Autoprefixed CSS, so you don’t need-webkit-or other prefixes.
* A fast interactive unit test runner with built-in support for coverage reporting.
* A live development server that warns about common mistakes.
* A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
* An offline-first [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) and a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) , meeting all the [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app) criteria. (*Note: Using the service worker is opt-in as of**react-scripts@2.0.0**and higher*)
* Hassle-free updates for the above tools with a single dependency.
Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together.
The tradeoff is that**these tools are preconfigured to work in a specific way**. If your project needs more customization, you can [“eject”](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.


## dependencies
* react-router-dom （React-Router v4）
* redux
* redux-saga
* axios

## devDependencies
* eslint
* react-app-rewired （扩展 CRA）
* eslint-plugin-react
* prettier （配合 VS Code 自动格式化并 fix eslint）
* eslint-plugin-prettier （把 Prettier 应用到 Eslint，配合 rules”prettier/prettier”: “error” 实现 Eslint 提醒）
* eslint-config-prettier （禁用所有和 Prettier 冲突的规则）
* babel-eslint
* webpack-bundle-analyzer
* react-app-rewire-webpack-bundle-analyzer

## use in antd

通过 babel-plugin-import 来实现组件代码和样式的按需加载

* babel-plungin-import
* customize-cra （用于修改 config-overrides.js）

```javascript
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );
```

## project structure

```
├── README.md
├── config-overrides.js
├── mock
│   └── index.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── actions                 => action 控制部分 建议根据具体 reducer 或组件在内部划分
│   │   └── index.js
│   ├── api                     => api 控制部分 全局接口配置 axios 拦截器配置
│   │   └── index.js
│   ├── assets                  => 公用静态文件
│   │   └── index.html
│   ├── components              => 全局通用组件 如 error 等。⚠️仅将可以全局复用的组件放在这里，route 独享的组件直接放入 route 下面
│   │   └── index.js
│   ├── index.css
│   ├── index.js                => 入口文件
│   ├── routers                 => 按照路由区分的 page 包含其内部组件
│   │   └── index.js
│   ├── sagas                   => saga 部分 建议按照业务进一步划分
│   │   └── index.js
│   ├── serviceWorker.js
│   ├── store                   => reducer + state in redux 聚合 state 保持组件的纯度
│   │   └── index.js
│   └── utils                   => 全局 helper 函数
│       └── helper.js
└── yarn.lock
```

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **keith**

* Github: [@XXXMrG](https://github.com/XXXMrG)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_