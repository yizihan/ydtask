let f = "";
class PraiseButton {
	constructor(num, element) {
		this.num = num;
		this.element = element;
	}
	clickAction() {
		this.element.click(() => {
			// 稀释点击事件！！！！
			if(f) {
				clearTimeout(f);
			}
			f = setTimeout(()=>{
				if (this.num < 10) {					// 10次点击以内，继续累加
					this.element.css('-webkit-filter', 'grayscale(0)');
					$('#animation').addClass('num');
					this.num = add(this.num);			// 这里要被单元测试
					setTimeout(function () {
						$('#animation').removeClass('num');
					}, 1000);
					axios.get('/index/update')
						.then(function(response) {
							console.log(response);
						})
						.catch(function(error) {
							console.log(error);
						});
				} else {								// 点击超过10次，归零
					this.element.css('-webkit-filter', 'grayscale(1)');
					this.num = 0;
				}
				console.log(this.num);
			}, 800);
		});
	}
}

class Thumb extends PraiseButton {
	constructor(num, element) {
		super(num, element);
	}
}

// let f = new Thumb(0, $('#hand'));		// 实例化
// f.clickAction();										// 执行点击方法

export default {Thumb}