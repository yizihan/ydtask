// const path = require('path');
import path from 'path';

// ES6 Map
const CONFIG = new Map();

CONFIG.set('port', 3000);	// 配置端口
CONFIG.set('staticDir', path.join(__dirname, '..', 'public'));	// 配置静态资源文件
CONFIG.set('viewDir', path.join(__dirname, '..', 'views'));		// 配置模板资源文件

export default CONFIG;