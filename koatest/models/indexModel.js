'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indexModel = function () {
	function indexModel(ctx) {
		_classCallCheck(this, indexModel);

		this.ctx = ctx;
	}

	_createClass(indexModel, [{
		key: 'updateNum',
		value: function updateNum() {
			var options = {
				// 注意需要访问的praise.php路径！！！！！
				uri: 'http://localhost/ydtask/koatest/praise.php',
				method: 'GET'
			};
			return new Promise(function (resolve, reject) {
				(0, _requestPromise2.default)(options).then(function (result) {
					// 发送请求返回的结果
					var info = JSON.parse(result);
					if (info) {
						resolve({ data: info.result });
					} else {
						reject({});
					}
				});
			});
		}
	}]);

	return indexModel;
}();

exports.default = indexModel;
