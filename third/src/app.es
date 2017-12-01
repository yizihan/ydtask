
import Koa from 'koa';
import router from 'koa-simple-router';
import serve from 'koa-static';
import co from 'co';
import render from 'koa-swig';

import babel_co from 'babel-register';
import babel_po from 'babel-polyfill';

import CONFIG from './config/config';
import initController from './controller/initController';

const app = new Koa(); 

// 使用koa-static配置静态路径
app.use(serve(CONFIG.get('staticDir')));
 
app.context.render = co.wrap(render({
	root: CONFIG.get('viewDir'),
	autoescape: true,
	cache: 'memory',
	ext: 'html',
	writeBody: false
}));
 
// 执行initController.js内定义的函数，并把app和router参数传递进去
initController.init(app, router);

app.listen(CONFIG.get('port'), function () {
	console.log('Listening!!!!')
});

export default app;