var path = require('path');
var HTMLPlugin = require('html-webpack-plugin')
var {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports ={
    entry:
        './src/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            }
        ],
    },
    plugins: [new HTMLPlugin({
        template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
]};