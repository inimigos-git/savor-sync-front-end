"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _header = require("./components/header/header");
var _sidebar = require("./components/sidebar/sidebar");
var _home = require("./pages/home/home");
var _restaurants = require("./pages/restaurants/restaurants");
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_header.Header, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_sidebar.Sidebar, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_home.Home, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/Restaurantes",
    element: /*#__PURE__*/React.createElement(_restaurants.Restaurants, null)
  })))));
}
var _default = exports.default = App;