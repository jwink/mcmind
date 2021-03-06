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
var $ = require("jquery");
var chooseCode_1 = require("./chooseCode");
var GameSection = /** @class */ (function (_super) {
    __extends(GameSection, _super);
    function GameSection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { codeSet: _this.props.codeSet, secretCode: _this.props.secretCode, guesses: [], pegs: [] };
        return _this;
    }
    GameSection.prototype.onCodeSubmit = function (playerCode) {
        this.setState({ secretCode: playerCode, codeSet: true });
    };
    GameSection.prototype.onGuessSubmit = function (playerGuess) {
        console.log(playerGuess);
        var currGuesses = this.state.guesses;
        var currPegs = this.state.pegs;
        currPegs.unshift(this.getPegs(playerGuess));
        currGuesses.unshift(playerGuess);
        this.setState({ guesses: currGuesses, pegs: currPegs });
    };
    GameSection.prototype.getPegs = function (playerGuess) {
        var pegResult = [null, null, null, null];
        var whitePegCount = 0;
        var redPegCount = 0;
        var secretObj = { white: 0, yellow: 0, orange: 0, red: 0, purple: 0, green: 0 };
        var guessObj = { white: 0, yellow: 0, orange: 0, red: 0, purple: 0, green: 0 };
        $.each(this.state.secretCode, function (idx, ele) {
            secretObj[ele] += 1;
        });
        $.each(playerGuess, function (idx, ele) {
            guessObj[ele] += 1;
        });
        console.log(secretObj);
        console.log(guessObj);
        $.each(secretObj, function (key, value) {
            if (value - guessObj[key] > 0) {
                whitePegCount += guessObj[key];
            }
            else {
                whitePegCount += value;
            }
        });
        $.each(this.state.secretCode, function (idx, ele) {
            if (ele == playerGuess[idx]) {
                redPegCount += 1;
            }
        });
        whitePegCount = whitePegCount - redPegCount;
        for (var i = 0; i < redPegCount; i++) {
            pegResult[i] = "red";
        }
        for (var i = 0; i < whitePegCount; i++) {
            pegResult[i + redPegCount] = "white";
        }
        return pegResult;
    };
    GameSection.prototype.gameRenderer = function () {
        if (this.state.codeSet) {
            return (React.createElement("div", null,
                React.createElement("div", { className: "w3-row guess-message" },
                    React.createElement("div", { className: "w3-col m12" }, "Please enter a code guess:")),
                React.createElement(chooseCode_1.ChooseCode, { gameCallback: this.onGuessSubmit.bind(this) })));
        }
        else {
            return (React.createElement(chooseCode_1.ChooseCode, { gameCallback: this.onCodeSubmit.bind(this) }));
        }
    };
    GameSection.prototype.renderEachBall = function (idx, guessArr) {
        var ballArr = [];
        $.each(guessArr, function (idx, ele) {
            ballArr.push(React.createElement("div", { key: idx, className: "w3-col m2" },
                React.createElement("div", { className: "small-ball " + ele })));
        });
        ballArr.push(React.createElement("div", { key: 4, className: "w3-col m4" },
            React.createElement("div", { className: "w3-row" },
                React.createElement("div", { className: "w3-col m4" },
                    React.createElement("div", { className: "peg-placeholder" }, "x")),
                React.createElement("div", { className: "w3-col m4" },
                    React.createElement("div", { className: "peg peg-top " + this.state.pegs[idx][0] })),
                React.createElement("div", { className: "w3-col m2" },
                    React.createElement("div", { className: "peg peg-top " + this.state.pegs[idx][1] }))),
            React.createElement("div", { className: "w3-row" },
                React.createElement("div", { className: "w3-col m4" },
                    React.createElement("div", { className: "peg-placeholder" }, "x")),
                React.createElement("div", { className: "w3-col m4" },
                    React.createElement("div", { className: "peg " + this.state.pegs[idx][2] })),
                React.createElement("div", { className: "w3-col m2" },
                    React.createElement("div", { className: "peg " + this.state.pegs[idx][3] })))));
        return ballArr;
    };
    GameSection.prototype.renderGuesses = function () {
        var bindThis = this;
        var guessRender = [];
        if (this.state.guesses == []) {
            return "";
        }
        else {
            $.each(this.state.guesses, function (idx, ele) {
                guessRender.push(React.createElement("div", { key: idx, className: "w3-row guess-row" }, bindThis.renderEachBall(idx, ele)));
            });
            return guessRender;
        }
    };
    GameSection.prototype.render = function () {
        console.log(this.state);
        return (React.createElement("div", { className: "w3-content" },
            this.gameRenderer(),
            this.renderGuesses()));
    };
    return GameSection;
}(React.Component));
exports.GameSection = GameSection;
