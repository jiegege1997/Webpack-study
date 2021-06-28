## 本地服务器

webpack-dev-server

webpack-dev-server编译之后 不会写入到任何输出文件
而是将bundle文件保留在内存中

用到memfs库

devServer: {
  contentBase: "./public"
}

- Hot Module Replacement
hot: true
模块增加 删除时，无需重新刷新整个页面