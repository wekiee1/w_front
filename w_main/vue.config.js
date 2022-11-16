
const baseUrl = process.env.VUE_APP_BASE_API ? process.env.VUE_APP_BASE_API : '/';

module.exports = {

  // publicPath: baseUrl,
  devServer: {
    // 指定项目启动时的默认端口号
    port: 8080,
    open: true,
    proxy: {
      "/api/component": {
        target: "http://localhost:8082",
        changeOrigin: true,
        pathRewrite: {
          "^/api/component": ""
        }
      },
      "/api/server": {
        target: "http://localhost:8081",
        changeOrigin: true,
        pathRewrite: {
          "^/api/server": ""
        }
      },
    }
  }
};
