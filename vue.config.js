
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    devServer: {
      port: 8000,
      proxy: {
        '/api': {
          target: 'https://m.uhomes.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    chainWebpack  (config)  {
       config
            .resolve
            .alias // 配置解析别名
            .set('@styles', resolve('src/stylesheets'))
            .set('@libs', resolve('src/libs'))
            .set('@util', resolve('src/util'))
            .set('@com', resolve('src/components'))
            .set('@views', resolve('src/views'))
            
    }
}