webpackHotUpdate(0,{

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _index = __webpack_require__(428);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(351);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(6);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(352);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(326);
	
	var _redux = __webpack_require__(102);
	
	var _actions = __webpack_require__(451);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	  App: {
	    displayName: "App"
	  }
	};
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/App.jsx",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/jimbot/Dropbox/MAKERSQUARE/garden/app/components/App.jsx",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformHmrLibIndexJs2(_UsersJimbotDropboxMAKERSQUAREGardenNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	// use connect since we are wrapping compinents in <Provider>
	// connects a React component to Redux store.
	
	
	function mapStateToProps(state) {
	  return {
	    username: state.name,
	    password: state.password
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actions, dispatch);
	}
	
	var App = _wrapComponent("App")(function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return _react3.default.createElement(
	        "div",
	        null,
	        _react3.default.createElement(
	          "div",
	          null,
	          "Hi, this is my react/redux app component"
	        ),
	        _react3.default.createElement(
	          "p",
	          null,
	          this.props
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.Component));
	
	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BcHAuanN4PzRjYzgiXSwibmFtZXMiOlsiYWN0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwicGFzc3dvcmQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb3BzIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztLQUFZQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSlo7QUFDQTs7O0FBS0EsVUFBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUIsVUFBTztBQUNMQyxlQUFVRCxNQUFNRSxJQURYO0FBRUxDLGVBQVVILE1BQU1HO0FBRlgsSUFBUDtBQUlEOztBQUVELFVBQVNDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxVQUFPLCtCQUFtQlAsT0FBbkIsRUFBNEJPLFFBQTVCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs4QkFHVTtBQUNQLGNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksZ0JBQUtDO0FBQVQ7QUFGRixRQURGO0FBTUQ7Ozs7OztBQUdIQyxPQUFNLHlCQUFRUixlQUFSLEVBQXlCSyxrQkFBekIsRUFBNkNHLEdBQTdDLENBQU47O21CQUVlQSxHIiwiZmlsZSI6IjAuOTFhYzJkZDBkNTJjZTViMzNiNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIHVzZSBjb25uZWN0IHNpbmNlIHdlIGFyZSB3cmFwcGluZyBjb21waW5lbnRzIGluIDxQcm92aWRlcj5cbi8vIGNvbm5lY3RzIGEgUmVhY3QgY29tcG9uZW50IHRvIFJlZHV4IHN0b3JlLlxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdXNlcm5hbWU6IHN0YXRlLm5hbWUsXG4gICAgcGFzc3dvcmQ6IHN0YXRlLnBhc3N3b3JkXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PkhpLCB0aGlzIGlzIG15IHJlYWN0L3JlZHV4IGFwcCBjb21wb25lbnQ8L2Rpdj5cbiAgICAgICAgPHA+e3RoaXMucHJvcHN9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQXBwLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=