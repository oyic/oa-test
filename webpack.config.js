const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = "development"
let target = "web"
if (process.env.NODE_ENV === 'production') {
    mode = "production"
    target = "browserslist"
}
module.exports = {
    output: {
        assetModuleFilename: "images/[name][ext][query]",
    },
    module: {
        rules: [

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: /node_modules/,
                type: "asset/resource"
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "",
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    target: target,
    devtool: "source-map",
    mode: mode,

    devServer: {
        contentBase: './dist',
        hot: true,
    },

    stats: {
        children: true,
    }
}