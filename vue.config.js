const { defineConfig } = require('@vue/cli-service')
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
  }  
})
