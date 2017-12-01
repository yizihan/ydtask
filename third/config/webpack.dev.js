const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        path: path.join(__dirname, '../build')
    },
    module: {
        rules: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                // 使用babel-loader将所有的es文件转为js文件
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
                NODE_ENV: '"dev"'
            }
        }),
        new LiveReloadPlugin({ appendScriptTag: true }),
        new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
        new webpack.optimize.CommonsChunkPlugin({
        	name: 'common',
        	filename: 'public/scripts/common/[name]-[hash:5].min.js'
        })
    ]
}