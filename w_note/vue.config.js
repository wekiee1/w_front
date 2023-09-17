const packageName = require('./package.json').name;

// const basicUrl = window.__POWERED_BY_QIANKUN__ ? "/" : "/note";
module.exports = {

  publicPath: 'http://192.168.199.225:8084/',
  outputDir: 'dist',
  devServer: {
    // 指定项目启动时的默认端口号
    port: 8084,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "^/api": {
        target: "http://localhost:8084",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
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
