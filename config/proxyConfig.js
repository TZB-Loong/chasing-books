module.exports = {
  proxyList: {
    "/api": {
      target: "http://api.zhuishushenqi.com",
      changeOrigin: true,
      pathRewrite: {'^/api': '' }
    }
  }
}
