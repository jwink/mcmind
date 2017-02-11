"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");
var titleSection_1 = require("./titleSection");
var gameSection_1 = require("./gameSection");
var chooseCode_1 = require("./chooseCode");
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { whichColors: ["white", "yellow", "orange", "red", "purple", "green"] };
        return _this;
    }
    Navigation.prototype.setColors = function () {
        var colors = [];
        var bindThis = this;
        $.each(bindThis.state.whichColors, function (idx, ele) {
            colors.push(React.createElement("div", { key: idx, className: "w3-col m2" },
                React.createElement("div", { onClick: bindThis.ballClicked.bind(bindThis, ele), className: "ball " + ele })));
        });
        return colors;
    };
    Navigation.prototype.ballClicked = function (color) {
        console.log(color);
    };
    Navigation.prototype.componentDidMount = function () {
        var allColors = ["white", "yellow", "orange", "red", "purple", "green"];
        function getIndex() {
            var rand = Math.round((Math.random() * 100));
            return (rand % 6);
        }
        var bindThis = this;
        function resetColor() {
            var whichIndex = getIndex();
            var whichColor = getIndex();
            var currObj = bindThis.state.whichColors;
            currObj[whichIndex] = allColors[whichColor];
            bindThis.setState({ whichColors: currObj });
        }
        var changeColor = setInterval(resetColor, 50);
        setTimeout(function () { clearInterval(changeColor); bindThis.setState({ whichColors: allColors }); }, 1000);
    };
    Navigation.prototype.render = function () {
        return (React.createElement("div", { className: "w3-content in-middle" },
            React.createElement("div", { className: "w3-row" }, this.setColors()),
            React.createElement("div", { className: "w3-row in-middle" },
                React.createElement("div", { className: "w3-col w3-half our-button" },
                    React.createElement("a", { href: "#two", className: "our-button-sub" }, "2-Player")),
                React.createElement("div", { className: "w3-col w3-half our-button" },
                    React.createElement("a", { href: "#one", className: "our-button-sub" }, "1-Player")))));
    };
    return Navigation;
}(React.Component));
ReactDOM.render(React.createElement(titleSection_1.TitleArea, null), document.getElementById('title_section'));
ReactDOM.render(React.createElement(Navigation, null), document.getElementById('main'));
location.hash = "#nav";
window.onhashchange = function () {
    var whichClass = location.hash;
    if (whichClass == '#nav') {
        ReactDOM.render(React.createElement(Navigation, null), document.getElementById('main'));
    }
    else if (whichClass == "#two") {
        ReactDOM.render(React.createElement(chooseCode_1.ChooseCode, null), document.getElementById('main'));
    }
    else if (whichClass == "#one") {
        ReactDOM.render(React.createElement(gameSection_1.GameSection, null), document.getElementById('main'));
    }
    else {
        ReactDOM.render(React.createElement("div", null, "No Bueno"), document.getElementById('main'));
    }
};
