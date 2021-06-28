## vue打包后不同版本解析

vue.runtime.global.prod.js

vue.global.js
1. 可以通过浏览器直接使用
2. 通过CDN引入和下载使用的就是这个
3. 暴露全局vue

vue.runtime.esm-browser.js
<sciprt type="module">使用


vue.esm-bundler.js
用于webpack
需要解析template 需要手动指定vue.em-bundler.js

vue.cjs.js
服务端渲染
通过require()在Node.js中使用

## vscode对 single-file components的支持
Vetur
Volar

vue-loader@next
@vue/compiler-sfc
VueLoaderPlugin

vue_options_api  对vue2做适配 可设置成flase
vue_prod_devtools 生产阶段是否支持devtools
