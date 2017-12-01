'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6 Map
var CONFIG = new Map(); // const path = require('path');


CONFIG.set('port', 3000); // 配置端口
CONFIG.set('staticDir', _path2.default.join(__dirname, '..', 'public')); // 配置静态资源文件
CONFIG.set('viewDir', _path2.default.join(__dirname, '..', 'views')); // 配置模板资源文件

exports.default = CONFIG;