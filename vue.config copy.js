const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: '/', // 根域上下文目录
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'staic', // 静态资源目录 (js, css, img, fonts)
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)，也可以是一个绝对路径
  lintOnSave: debug && 'error', // 是否开启eslint保存检测，有效值：ture | false | 'error'(error => lint 错误在开发时直接显示在浏览器中)
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本(设置为 true 后就可以在 Vue 组件中使用 template 选项，应用额外增加 10kb 左右)
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  integrity: true, // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)，如果构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性
  configureWebpack: config => { // webpack配置，值是一个对象，则会通过 webpack-merge 合并到最终的配置中。值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
    if (debug) { // 开发环境配置

    } else { // 生产环境配置

    }

    Object.assign(config, {
      resolve: {
        // 开发生产环境共同配置，配置别名
        alias: {
          '@': path.resolve(__dirname, './src'),
          '~': path.resolve(__dirname, './src/components'),
          '#': path.resolve(__dirname, './src/assets'),
          '^': path.resolve(__dirname, './src/views'),
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    })
  },
  chainWebpack: config => {
    if (debug) { // 开发环境配置

    } else { // 生产环境配置

    }
  },
  css: {
    loaderOptions: {} // 向 CSS 相关的 loader 传递选项
  },
  devServer: {
    open: true, // 启动后打开浏览器
    // host: 'localhost', // 指定使用一个 host，默认是 localhost。如果,希望服务器外部可访问，指定为 0.0.0.0
    port: '1314', // 监听的端口号
    https: false, // dev-server 通过 HTTP 提供服务
    // color: true, // 启用/禁用控制台的彩色输出
    compress: true, // 一切服务都启用gzip压缩
    index: 'index.html', // 被作为索引文件的文件名
    lazy: false, // 只有在请求时才编译包(bundle)，意味着 webpack 不会监视任何文件改动（惰性模式）
    overlay: true, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
    progress: true, // 将运行进度输出到控制台
    proxy: { // 配置跨域
      '/path': {
        target: 'http://192.168.0.49:9940', // 要访问的跨域域名
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/path': '' }
      }
    },
    before: app => {} // 在服务内部的所有其他中间件之前，提供执行自定义中间件的功能
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    iconPaths: {
      favicon32: '/',
      favicon16: '/',
      appleTouchIcon: '/',
      maskIcon: '/',
      msTileImage: '/'
    }
  },
  pluginOptions: { // 第三方插件配置
    // foo: {
    //   // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    // }
  }
}

//
//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..