import rpA from 'request-promise';

class indexModel {
	constructor(ctx) {
		this.ctx = ctx;
	}
	updateNum() {
		const options = {
			// 注意需要访问的praise.php路径！！！！！
			uri: 'http://localhost/ydtask/koatest/praise.php',
			method: 'GET'
		}
		return new Promise((resolve, reject) => {
			rpA(options).then(function(result) {	// 发送请求返回的结果
				const info = JSON.parse(result);
				if(info) {
					resolve({data:info.result});
				} else {
					reject({});
				}
			});
		});
	}
}
export default indexModel;