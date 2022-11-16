"use strict";
const packageName = require('./package.json').name;
const port = process.env.port || 8080;
module.exports = {

  devServer: {
    // 指定项目启动时的默认端口号
    port: port,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "^/component": {
        target: "http://localhost:8082",
        changeOrigin: true,
        pathRewrite: {
          "^/component": ""
        }
      }
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[packageName]`,
      libraryTarget: "umd", // 2.  把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageName}`,
      // chunkLoadingGlobal: `webpackJsonp_${name}`,  
    },
  },
};
