"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TitleArea = /** @class */ (function (_super) {
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
