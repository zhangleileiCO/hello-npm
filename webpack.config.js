const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './example/src/app.js'),
    output: {
        path: path.join(__dirname, 'example/dist'),
        filename: "bound.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "example/src/index.html"),
        filename: "./index.html"
    })],
    devServer: {
        port: 8081
    }
}