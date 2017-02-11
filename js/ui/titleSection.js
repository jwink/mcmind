"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TitleArea = (function (_super) {
    __extends(TitleArea, _super);
    function TitleArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleArea.prototype.render = function () {
        return (React.createElement("div", { className: "title_area" }, "Master Computer Mind!!"));
    };
    return TitleArea;
}(React.Component));
exports.TitleArea = TitleArea;
