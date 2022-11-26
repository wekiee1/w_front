const packageName = require('./package.json').name;


module.exports = {

  // publicPath: baseUrl,
  devServer: {
    // 指定项目启动时的默认端口号
    port: 8084,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/api": {
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
  }

};
