'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRouterConfig = require('react-router-config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var initalRequest = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store, url, config) {
		var branch, promises, i, route, comp, initialDispatchs, actList;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						branch = (0, _reactRouterConfig.matchRoutes)(config, url);
						promises = [];

						for (i in branch) {
							route = branch[i].route;


							if (route.request) {
								comp = require(route.request);
								initialDispatchs = comp.initialDispatchs;

								if (!initialDispatchs && comp.default) {
									initialDispatchs = comp.default.initialDispatchs;
								}
								if (comp && initialDispatchs) {
									actList = initialDispatchs(store.getState());

									actList.map(function (item) {
										promises.push(store.dispatch(item));
									});
								}
							}
						}
						_context.next = 5;
						return Promise.all(promises).catch(function (err) {
							return console.log('initialRequest:ERROR', err);
						});

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function initalRequest(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();
exports.default = initalRequest;