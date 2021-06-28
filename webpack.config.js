const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const { CopyWebpackPlugin } = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader/dist/index')

//webpack是在node里运行,所以用commonjs方式
module.exports = {
  // 设置模式
  // development  || production
  mode: "development", //代码不压缩
  // devtool: "eval", //默认值
  //设置source-map 建立js映射文件 方便调试代码错误
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),  //要求绝对路径
    filename: "js/bundle.js" //默认main.js 改为bundle.js
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式 只匹配.css结尾的文件
        use: [
          "style-loader",
          "css-loader",  //css-loader 只负责将.css文件解析,并不会将解析之后的css插入到页面中
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // require("autoprefixer"), //添加浏览器前缀
                  require("postcss-preset-env") //内置了autoprefixer
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/, 
        use: [
          "style-loader",
          "css-loader",
          "less-loader"  //通过lessc compaile编译成css文件
        ]
      },
      //处理图片
      {
        test: /\.(jpg?g||png|gif|svg)$/,
        use: {
          // loader: "file-loader"
          loader: "url-loader",
          options: {
            name: "img/[name]_[hash:6].[ext]",
            limit: 100 * 1024 //对小于100kb的文件 base64处理
          }
        }
      },
      //webpack5 写法 asset module type
      {
        test: /\.(jpg?g||png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      //处理字体
      {
        test: /\.(eot|ttf|woff2?)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "font/[name]_[hash:6].[ext]",
          }
        }
      },
      //webpack5 处理字体
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        },
      },
      //webpack babel-loader
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          // plugins: [
          //   "@babel/plugin-transform-arrow-functions", //箭头函数
          //   "@babel/plugin-transform-block-scoping"    //块级作用域 const let
          // ]
          presets: [
            "@babel/preset-env" //es6
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), //删除之前打包好的文件
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "test网页标题"
    }),  //生成dist里面的html
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html" //忽略这个文件夹下面的所有html
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}