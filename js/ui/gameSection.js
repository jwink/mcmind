"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var chooseCode_1 = require("./chooseCode");
var GameSection = (function (_super) {
    __extends(GameSection, _super);
    function GameSection(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { codeSet: _this.props.codeSet, secretCode: _this.props.secretCode, guesses: [] };
        return _this;
    }
    GameSection.prototype.onCodeSubmit = function (playerCode) {
        this.setState({ secretCode: playerCode, codeSet: true });
    };
    GameSection.prototype.onGuessSubmit = function (playerGuess) {
        console.log(playerGuess);
        var currGuesses = this.state.guesses;
        currGuesses.unshift(playerGuess);
        this.setState({ guesses: currGuesses });
    };
    GameSection.prototype.gameRenderer = function () {
        if (this.state.codeSet) {
            return (React.createElement(chooseCode_1.ChooseCode, { gameCallback: this.onGuessSubmit.bind(this) }));
        }
        else {
            return (React.createElement(chooseCode_1.ChooseCode, { gameCallback: this.onCodeSubmit.bind(this) }));
        }
    };
    GameSection.prototype.render = function () {
        console.log(this.state);
        return (React.createElement("div", { className: "w3-content in-middle" }, this.gameRenderer()));
    };
    return GameSection;
}(React.Component));
exports.GameSection = GameSection;
