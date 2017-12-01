const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimezeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        // index将作为新生成文件的文件名
        index: [
            // 将以下两个文件打包合并成一个文件
            path.join(__dirname, '../src/public/scripts/lib.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tags: [path.join(__dirname, '../src/public/scripts/tags.es')]
    },
    output: {
        filename: 'public/scripts/[name]-[hash:5].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"prod"'
            }
        }),
        // 浏览器自动刷新
        new LiveReloadPlugin({ appendScriptTag: true }),
        // 将CSS文件单独剥离输出
        new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
        // 处理压缩JS插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        }),
        new OptimezeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ]
}