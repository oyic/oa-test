const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: [path.resolve(__dirname, 'src/index.js')],
    module: devtool: false,
    mode: 'development'
}