"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MainModal;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _MainModalModule = _interopRequireDefault(require("./MainModal.module.css"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function MainModal(_ref) {
  var setModel = _ref.setModel,
    content = _ref.content,
    _ref$closeOnOverlayCl = _ref.closeOnOverlayClick,
    closeOnOverlayClick = _ref$closeOnOverlayCl === void 0 ? true : _ref$closeOnOverlayCl,
    _ref$closeOnEsc = _ref.closeOnEsc,
    closeOnEsc = _ref$closeOnEsc === void 0 ? true : _ref$closeOnEsc,
    _ref$bodyColor = _ref.bodyColor,
    bodyColor = _ref$bodyColor === void 0 ? "#fff" : _ref$bodyColor,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "auto" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "auto" : _ref$height,
    _ref$animationDuratio = _ref.animationDuration,
    animationDuration = _ref$animationDuratio === void 0 ? 300 : _ref$animationDuratio,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isClosing = _useState2[0],
    setIsClosing = _useState2[1];
  var modalRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    document.body.classList.add("stop-scrolling");
    if (modalRef.current) {
      modalRef.current.focus();
    }
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === "Escape" && closeOnEsc) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      document.body.classList.remove("stop-scrolling");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeOnEsc]);
  var handleClose = function handleClose() {
    setIsClosing(true);
    setTimeout(function () {
      setModel(false);
      onClose();
    }, animationDuration);
  };
  var handleOverlayClick = function handleOverlayClick() {
    if (closeOnOverlayClick) {
      handleClose();
    }
  };
  return /*#__PURE__*/_reactDom["default"].createPortal(/*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_MainModalModule["default"].container, " ").concat(isClosing ? _MainModalModule["default"].closing : _MainModalModule["default"].opening),
    style: {
      "--animation-duration": "".concat(animationDuration, "ms")
    },
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleOverlayClick,
    className: _MainModalModule["default"].overlay,
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MainModalModule["default"].body,
    style: {
      backgroundColor: bodyColor,
      width: width,
      height: height,
      maxWidth: "100%",
      maxHeight: "90vh"
    },
    ref: modalRef,
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _MainModalModule["default"].content
  }, content), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClose,
    className: _MainModalModule["default"].closeBtn,
    "aria-label": "close"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: _MainModalModule["default"].icon
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 \r L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 \r L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 \r L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 \r L 4.7070312 3.2929688 z"
  }))))), document.body);
}
MainModal.propTypes = {
  setModel: _propTypes["default"].func.isRequired,
  content: _propTypes["default"].node.isRequired,
  closeOnOverlayClick: _propTypes["default"].bool,
  closeOnEsc: _propTypes["default"].bool,
  bodyColor: _propTypes["default"].string,
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  animationDuration: _propTypes["default"].number,
  onClose: _propTypes["default"].func
};