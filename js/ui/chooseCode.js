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
        _this.state = { whichColors: ["white", "yellow", "orange", "red", "purple", "green"],
            codeColors: ["lightgray", "lightgray", "lightgray", "lightgray"],
            selectedBox: "none",
            codeSubmitted: false };
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
        var codeSections = ["sec1", "sec2", "sec3", "sec4"];
        var currColors = this.state.codeColors;
        if (codeSections.indexOf(this.state.selectedBox) != -1) {
            currColors[codeSections.indexOf(this.state.selectedBox)] = color;
        }
        this.setState({ codeColors: currColors, selectedBox: "none" });
    };
    ChooseCode.prototype.boxSelected = function (section) {
        //console.log(section);
        if (this.state.selectedBox == section) {
            this.setState({ selectedBox: "none" });
        }
        else {
            this.setState({ selectedBox: section });
        }
    };
    ChooseCode.prototype.codeSubmit = function () {
        if (this.state.codeColors.indexOf("lightgray") != -1) {
            this.setState({ codeSubmitted: true });
        }
        else {
            // console.log(this.state.codeColors);
            // console.log(this.props);
            this.setState({ whichColors: ["white", "yellow", "orange", "red", "purple", "green"],
                codeColors: ["lightgray", "lightgray", "lightgray", "lightgray"],
                selectedBox: "none",
                codeSubmitted: false });
            this.props.gameCallback(this.state.codeColors);
        }
    };
    ChooseCode.prototype.codeChooser = function () {
        var bindThis = this;
        var codeOutput = [];
        var codeSections = ["sec1", "sec2", "sec3", "sec4"];
        $.each(bindThis.state.codeColors, function (idx, ele) {
            var boxClass = "";
            if (bindThis.state.selectedBox == codeSections[idx]) {
                boxClass = "code-box selected-box";
            }
            else {
                boxClass = "code-box deselected-box";
            }
            codeOutput.push(React.createElement("div", { key: idx, className: "w3-col m3" },
                React.createElement("div", { onClick: bindThis.boxSelected.bind(bindThis, codeSections[idx]), className: boxClass },
                    React.createElement("div", { className: "ball " + ele }))));
        });
        return codeOutput;
    };
    ChooseCode.prototype.submitMessage = function () {
        if (this.state.codeSubmitted) {
            return (React.createElement("div", { className: "w3-row some-distance submit-message" },
                React.createElement("div", { className: "w3-col m12" }, "Code Is Incomplete!  Please Select All Four Colors...")));
        }
        else {
            return "";
        }
    };
    ChooseCode.prototype.render = function () {
        return (React.createElement("div", { className: "w3-content some-distance" },
            React.createElement("div", { className: "w3-row" }, this.setColors()),
            React.createElement("div", { className: "w3-row some-distance" }, this.codeChooser()),
            React.createElement("div", { className: "w3-row some-distance" },
                React.createElement("div", { onClick: this.codeSubmit.bind(this), className: "w3-col m12 our-button" },
                    React.createElement("a", { href: location.hash, className: "our-button-sub" }, "Submit!"))),
            this.submitMessage()));
    };
    return ChooseCode;
}(React.Component));
exports.ChooseCode = ChooseCode;
