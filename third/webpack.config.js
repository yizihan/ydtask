const DevWebpack = require('./config/webpack.dev.js');
const ProdWebpack = require('./config/webpack.prod.js');

// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//     entry: {
//      // index将作为新生成文件的文件名
//         index: [
//          // 将以下两个文件打包合并成一个文件
//             path.join(__dirname, './src/public/scripts/lib.es'),
//             path.join(__dirname, './src/public/scripts/indexadd.js')
//         ],
//         tags: [path.join(__dirname, './src/public/scripts/tags.es')]
//     },
//     output: {
//         filename: 'public/scripts/[name]-[hash5].js',
//         path: path.join(__dirname, './build')
//     }
// }

// 根据启动命令得到的process.env.NODE_ENV来区分使用哪个版本的配置文件
switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = DevWebpack;
        break;
    case 'prod':
        module.exports = ProdWebpack;
        break;
    default:
        module.exports = DevWebpack;
}