//const target = 'https://wegoyougo.herokuapp.com:3000/';
const target = 'http://127.0.0.1:3000';

module.exports = {
  devServer: {
      proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target, 
        changeOrigin: true,
      }
    }
  }
}