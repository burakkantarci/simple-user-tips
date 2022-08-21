"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Tips = props => {
  (0, _react.useEffect)(() => {
    if (props.data) {
      document.getElementById('tip-0').classList.remove("hidden");
    }
  });

  const tipToggle = index => {
    const allWithClass = Array.from(document.getElementsByClassName('tip'));
    allWithClass.forEach(element => {
      element.classList.add("hidden");
    });
    document.getElementById('tip-' + (index + 1)).classList.remove("hidden");
  };

  const closeTips = () => {
    document.getElementById("usips-container").classList.add("hidden");
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "usips-container",
    className: "absolute left-4 bottom-4 p-4 mr-4 bg-white shadow-lg rounded-lg sm:w-96"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "absolute -top-3 -right-3 bg-white text-gray-400 rounded-full p-1",
    onClick: () => closeTips()
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), props.data.map((tip, key) => /*#__PURE__*/_react.default.createElement("div", {
    key: key,
    className: "tip hidden",
    id: "tip-".concat(key)
  }, tip.img !== "" ? /*#__PURE__*/_react.default.createElement("img", {
    src: tip.img,
    className: "w-full object-cover h-36 rounded-lg mb-4",
    alt: "Tip item"
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-xl mb-2 text-gray-700 font-semibold"
  }, tip.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm text-gray-500"
  }, tip.desc), props.data.length > 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between items-center mt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-400 text-xs"
  }, key + 1, "/", props.data.length), key !== props.data.length - 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, key !== 0 ? /*#__PURE__*/_react.default.createElement("button", {
    className: "text-gray-400 text-xs mr-4 hover:text-gray-500",
    onClick: () => tipToggle(key - 2)
  }, "Previous Tip") : null, /*#__PURE__*/_react.default.createElement("button", {
    className: "px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-700 text-white",
    onClick: () => tipToggle(key)
  }, "Next")) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "text-gray-400 text-xs mr-4 hover:text-gray-500",
    onClick: () => tipToggle(-1)
  }, "Start Again"), /*#__PURE__*/_react.default.createElement("button", {
    className: "px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-900 text-white",
    onClick: () => closeTips()
  }, "Close tips"))) : null))));
};

var _default = Tips;
exports.default = _default;