module.exports = {
  proxyList: {
    "/api": { //API域名代理
      target: "http://api.zhuishushenqi.com",
      changeOrigin: true,
      pathRewrite: {'^/api': 'http://api.zhuishushenqi.com' }
    },
    "/chapter":{ //章节域名代理
      target:"http://chapter2.zhuishushenqi.com",
      changeOrigin:true,
      pathRewrite:{'^/chapter':'http://chapter2.zhuishushenqi.com'}
    }
  }
}
