import indexModel from '../models/indexModel';

const indexController = {
	index() {
		return async (ctx, next) => {
			// 使用render(koa-swig)指定显示页面的模板文件
			ctx.body = await ctx.render('index.html', {
				title: '拇指点赞'
			})
		}
	},
	update() {
		return async (ctx, next) => {
			const indexM = new indexModel(ctx);		// 实例化
			ctx.body = await indexM.updateNum();
		}
	}
}
export default indexController;