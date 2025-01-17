webpackHotUpdate(0,{

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EventListEntry = function EventListEntry(_ref) {
	  var date = _ref.date;
	  var details = _ref.details;
	  var location = _ref.location;
	  var org_email = _ref.org_email;
	  var org_name = _ref.org_name;
	  var org_site = _ref.org_site;
	  var time = _ref.time;
	  var title = _ref.title;
	  var user_email = _ref.user_email;
	  var username = _ref.username;
	  var deleteEvent = _ref.deleteEvent;
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "h3",
	        { className: "event-title" },
	        title
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        date
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        time
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        location
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        org_name
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        org_site
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        org_email
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        username
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        user_email
	      ),
	      _react2.default.createElement(
	        "button",
	        { type: "button", onClick: function onClick() {
	            return deleteEvent(title);
	          } },
	        "Delete Event"
	      )
	    )
	  );
	};
	
	var _default = EventListEntry;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(EventListEntry, "EventListEntry", "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/EventListEntry.jsx");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/jimbot/Dropbox/MAKERSQUARE/garden/client/components/EventListEntry.jsx");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V2ZW50TGlzdEVudHJ5LmpzeD8wN2M1Il0sIm5hbWVzIjpbIkV2ZW50TGlzdEVudHJ5IiwiZGF0ZSIsImRldGFpbHMiLCJsb2NhdGlvbiIsIm9yZ19lbWFpbCIsIm9yZ19uYW1lIiwib3JnX3NpdGUiLCJ0aW1lIiwidGl0bGUiLCJ1c2VyX2VtYWlsIiwidXNlcm5hbWUiLCJkZWxldGVFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsS0FBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE9BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE9BQVFDLE9BQVIsUUFBUUEsT0FBUjtBQUFBLE9BQWlCQyxRQUFqQixRQUFpQkEsUUFBakI7QUFBQSxPQUEyQkMsU0FBM0IsUUFBMkJBLFNBQTNCO0FBQUEsT0FBc0NDLFFBQXRDLFFBQXNDQSxRQUF0QztBQUFBLE9BQWdEQyxRQUFoRCxRQUFnREEsUUFBaEQ7QUFBQSxPQUEwREMsSUFBMUQsUUFBMERBLElBQTFEO0FBQUEsT0FBZ0VDLEtBQWhFLFFBQWdFQSxLQUFoRTtBQUFBLE9BQXVFQyxVQUF2RSxRQUF1RUEsVUFBdkU7QUFBQSxPQUFtRkMsUUFBbkYsUUFBbUZBLFFBQW5GO0FBQUEsT0FBNkZDLFdBQTdGLFFBQTZGQSxXQUE3RjtBQUFBLFVBQ25CO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxXQUFJLFdBQVUsYUFBZDtBQUE2Qkg7QUFBN0IsUUFERjtBQUVFO0FBQUE7QUFBQTtBQUFNUDtBQUFOLFFBRkY7QUFHRTtBQUFBO0FBQUE7QUFBTU07QUFBTixRQUhGO0FBSUU7QUFBQTtBQUFBO0FBQU1KO0FBQU4sUUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFNRTtBQUFOLFFBTEY7QUFNRTtBQUFBO0FBQUE7QUFBTUM7QUFBTixRQU5GO0FBT0U7QUFBQTtBQUFBO0FBQU1GO0FBQU4sUUFQRjtBQVFFO0FBQUE7QUFBQTtBQUFNTTtBQUFOLFFBUkY7QUFTRTtBQUFBO0FBQUE7QUFBTUQ7QUFBTixRQVRGO0FBVUU7QUFBQTtBQUFBLFdBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVM7QUFBQSxvQkFBTUUsWUFBWUgsS0FBWixDQUFOO0FBQUEsWUFBL0I7QUFBQTtBQUFBO0FBVkY7QUFERixJQURtQjtBQUFBLEVBQXJCOztnQkFpQmVSLGM7Ozs7Ozs7OztpQ0FqQlhBLGMiLCJmaWxlIjoiMC5hZDQzODIwMDc4ZTVkYjc3Yzk3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xudmFyIEV2ZW50TGlzdEVudHJ5ID0gKHtkYXRlLCBkZXRhaWxzLCBsb2NhdGlvbiwgb3JnX2VtYWlsLCBvcmdfbmFtZSwgb3JnX3NpdGUsIHRpbWUsIHRpdGxlLCB1c2VyX2VtYWlsLCB1c2VybmFtZSwgZGVsZXRlRXZlbnR9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJldmVudC10aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgPGRpdj57ZGF0ZX08L2Rpdj5cbiAgICAgIDxkaXY+e3RpbWV9PC9kaXY+XG4gICAgICA8ZGl2Pntsb2NhdGlvbn08L2Rpdj5cbiAgICAgIDxkaXY+e29yZ19uYW1lfTwvZGl2PlxuICAgICAgPGRpdj57b3JnX3NpdGV9PC9kaXY+XG4gICAgICA8ZGl2PntvcmdfZW1haWx9PC9kaXY+XG4gICAgICA8ZGl2Pnt1c2VybmFtZX08L2Rpdj5cbiAgICAgIDxkaXY+e3VzZXJfZW1haWx9PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVFdmVudCh0aXRsZSl9PkRlbGV0ZSBFdmVudDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TGlzdEVudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9FdmVudExpc3RFbnRyeS5qc3giXSwic291cmNlUm9vdCI6IiJ9