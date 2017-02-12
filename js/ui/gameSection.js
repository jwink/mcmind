"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var $ = require("jquery");
var chooseCode_1 = require("./chooseCode");
var GameSection = (function (_super) {
    __extends(GameSection, _super);
    function GameSection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { whichColors: ["white", "yellow", "orange", "red", "purple", "green"] };
        return _this;
    }
    GameSection.prototype.setColors = function () {
        var colors = [];
        var bindThis = this;
        $.each(bindThis.state.whichColors, function (idx, ele) {
            colors.push(React.createElement("div", { key: idx, className: "w3-col m2" },
                React.createElement("div", { onClick: bindThis.ballClicked.bind(bindThis, ele), className: "ball " + ele })));
        });
        return colors;
    };
    GameSection.prototype.ballClicked = function (color) {
        console.log(color);
    };
    GameSection.prototype.render = function () {
        return (React.createElement("div", { className: "w3-content in-middle" },
            React.createElement(chooseCode_1.ChooseCode, null)));
    };
    return GameSection;
}(React.Component));
exports.GameSection = GameSection;
