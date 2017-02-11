"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var ChooseCode = (function (_super) {
    __extends(ChooseCode, _super);
    function ChooseCode(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { whichColors: ["white", "yellow", "orange", "red", "purple", "green"] };
        return _this;
    }
    ChooseCode.prototype.setColors = function () {
        var colors = [];
        var bindThis = this;
        $.each(bindThis.state.whichColors, function (idx, ele) {
            colors.push(React.createElement("div", { key: idx, className: "w3-col m2" },
                React.createElement("div", { onClick: bindThis.ballClicked.bind(bindThis, ele), className: "ball " + ele })));
        });
        return colors;
    };
    ChooseCode.prototype.ballClicked = function (color) {
        console.log(color);
    };
    ChooseCode.prototype.render = function () {
        return (React.createElement("div", { className: "w3-content in-middle" },
            React.createElement("div", { className: "w3-row" }, this.setColors()),
            React.createElement("div", null, "Hello World")));
    };
    return ChooseCode;
}(React.Component));
exports.ChooseCode = ChooseCode;
