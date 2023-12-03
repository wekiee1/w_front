const packageName = require('./package.json').name;

// const basicUrl = window.__POWERED_BY_QIANKUN__ ? "/" : "/note";
module.exports = {

  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    // 指定项目启动时的默认端口号
    port: 8084,
    open: false,
    headers: {
      "Access-Control-Allow-Origin": '*',
    },
    proxy: {
      "/note": {
        target: "http://localhost:8081",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/note": ""
        // }
      }
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp|woff2|eot|ttf|otf)$/i,
          // type: 'asset/resource',
          // dependency: { not: ['url'] }
          use: [
            {
              loader: 'url-loader',
              options: {},
            },
          ],
        },
      ],
    },
  },


};
