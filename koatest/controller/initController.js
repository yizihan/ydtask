'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexController = require('../controller/indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initController = {
	init: function init(app, router) {
		// 接收来自app.js传递的app和router
		// define router
		app.use(router(function (_) {
			// 原模板
			// _.get('/index/index', (ctx, next) => {
			// 	ctx.body = 'hello'
			// })

			// 定义路由并定义回调函数
			_.get('/index/index', _indexController2.default.index());
			_.get('/index/update', _indexController2.default.update());
		}));
	}
}; // const index = require('indexController.js');
exports.default = initController;
