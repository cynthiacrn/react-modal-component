"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./SuccessModal.css");
function SuccessModal(_ref) {
  var open = _ref.open,
    setOpen = _ref.setOpen;
  if (open) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "success-modal",
      onClick: function onClick() {
        return setOpen(false);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "success-modal__content"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "Employee Created!"), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: function onClick() {
        return setOpen(false);
      },
      className: "success-modal__close-icon"
    }, "\xD7")));
  }
  return null;
}
var _default = SuccessModal;
exports["default"] = _default;