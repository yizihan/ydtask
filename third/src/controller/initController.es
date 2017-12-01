// const index = require('indexController.js');
import index from '../controller/indexController';

const initController = {
	init(app, router) {		// 接收来自app.js传递的app和router
		// define router
		app.use(router(_ => {
			// 原模板
			// _.get('/index/index', (ctx, next) => {
			// 	ctx.body = 'hello'
			// })

			// 定义路由并定义回调函数
			_.get('/index/index', index.index())
			_.get('/index/update', index.update())
			
		}))
	}
}
export default initController;