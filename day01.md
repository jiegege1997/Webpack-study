## babel 编译过程

@babel/core
@babel/cli

npx babel demo.js --out-dir dist

npx babel demo.js --out-file demo.js

转换箭头函数
@babel/plugin-transform-arrow-functions

转换块级作用域 const,let 转换为 var
@babel/plugin-transform-block-scoping

ES6预设
@babel/preset-env

## babel底层原理

1. 解析(Parsing)

2. 转换

3. 生成

词法分析(关键字、 变量、符号)

token数组

语法分析

AST抽象语法树

遍历 访问。再使用相关的插件 转成 新的AST语法树

## babel-loader

## babel配置文件
babel.config.json
.babelrc.json