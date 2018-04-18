var path = require('path')
module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    config.resolve.alias = {
      '<config>': path.resolve(__dirname, './config'),
      '<images>': path.resolve(__dirname, './public/images'),
      '<components>': path.resolve(__dirname, './components'),
    }
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [/node_modules/],
        use: [
          'url-loader',
        ],
      }

    )  

    return config
  }
}
