const path = require('path')
const MniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: [
            path.resolve(__dirname, 'resources', 'scripts', 'index.js'),
            path.resolve(__dirname, 'resources', 'styles', 'game.scss')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            /*{
                test: /\.(png|jpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            },*/
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
        ],
        extensions: ['.js', '.scss']
    },
    plugins: [
        new MniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        /*
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'resources', 'images'),
                    to: path.resolve(__dirname, 'public', 'images')
                }
            ]
        })
        */
    ],
    watch: true
}