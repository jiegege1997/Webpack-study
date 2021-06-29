## Hot Module Replacement hmr
hot: true
模块增加 删除时，无需重新刷新整个页面

原理 
开启hmr后 会建立socket长连接
服务器监听到对应模块发送变化时,生成两个.json 和 .js文件
发送给浏览器
浏览器再进行相应的更新

## resolve
enhanced-resolve

解析三种路径
1. 绝对路径
2. 相对路径
3. 模块路径

## webpack-merge