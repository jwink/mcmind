"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.setColors = function () {
        var colors = [];
        var whichColors = ["white", "yellow", "orange", "red", "purple", "green"];
        var bindThis = this;
        $.each(whichColors, function (idx, ele) {
            colors.push(React.createElement("div", { key: idx, className: "w3-col m2" },
                React.createElement("div", { onClick: bindThis.ballClicked.bind(bindThis, ele), className: "ball " + ele })));
        });
        return colors;
    };
    Navigation.prototype.ballClicked = function (color) {
        console.log(color);
    };
    Navigation.prototype.render = function () {
        return (React.createElement("div", { className: "w3-content" },
            React.createElement("div", { className: "w3-row" }, this.setColors()),
            React.createElement("div", { className: "w3-row" },
                React.createElement("div", { className: "w3-col m2" }, "s"),
                React.createElement("div", { className: "w3-col m2" },
                    React.createElement("div", { className: "ball" })),
                React.createElement("div", { className: "w3-col m2" }),
                React.createElement("div", { className: "w3-col m2" }),
                React.createElement("div", { className: "w3-col m2" }),
                React.createElement("div", { className: "w3-col m2" }))));
    };
    return Navigation;
}(React.Component));
ReactDOM.render(React.createElement(Navigation, null), document.getElementById('main'));
