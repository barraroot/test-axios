const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://backoffice.everestgames.com.br/',
        changeOrigin: true,
        headers: {
          'host': 'demo.everestgames.com.br',
          'EVEREST-DASH': 'demo.everestgames.com.br'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('copy').tap((entries) => {
      entries[0].patterns.push({
        from: path.resolve(__dirname, 'vercel.json'),
        to: path.resolve(__dirname, 'dist/'),
        toType: 'dir',
        noErrorOnMissing: true,
        globOptions: { ignore: ['.DS_Store'] },
      })

      return entries
    })
  },   
})
