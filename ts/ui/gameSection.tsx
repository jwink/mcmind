
import * as React from 'react';
import * as $ from 'jquery';
import {ChooseCode} from './chooseCode';

export class GameSection extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {codeSet: this.props.codeSet, secretCode: this.props.secretCode, guesses: [], pegs:[]};
    }
    onCodeSubmit(playerCode) {
        this.setState({secretCode: playerCode, codeSet: true});
    }
    onGuessSubmit(playerGuess) {
        console.log(playerGuess);
        let currGuesses = this.state.guesses;
        let currPegs = this.state.pegs;
        currPegs.unshift(this.getPegs(playerGuess));
        currGuesses.unshift(playerGuess);
        this.setState({guesses: currGuesses, pegs: currPegs});
    }
    getPegs(playerGuess) {
        let pegResult = [null, null, null, null];
        let whitePegCount = 0;
        let secretObj = {white: 0, yellow: 0, orange: 0, red:0, purple:0, green: 0};
        let guessObj = {white: 0, yellow: 0, orange: 0, red:0, purple:0, green: 0};
        $.each(this.state.secretCode, function(idx, ele) {
            secretObj[ele] += 1;
        });
        $.each(playerGuess, function(idx, ele) {
            guessObj[ele] += 1;
        });        
        console.log(secretObj);
        console.log(guessObj);
        pegResult = ["white", "white", "white", "white"];
        return pegResult;
    }
    gameRenderer() {
        if (this.state.codeSet) {
            return(
            <div>    
                <div className="w3-row guess-message">
                    <div className="w3-col m12">
                        Please enter a code guess:
                    </div>    
                </div>
                <ChooseCode gameCallback={this.onGuessSubmit.bind(this)} />
            </div>
            );
        } else {
            return(
                <ChooseCode gameCallback={this.onCodeSubmit.bind(this)} />
            );
        }
    }
    renderEachBall(idx, guessArr) {
        let ballArr = [];
        $.each(guessArr, function(idx, ele) {
            ballArr.push(<div key={idx} className="w3-col m2">
                            <div className={"small-ball " + ele}></div>
                        </div>
            );
        });
        ballArr.push(<div key={4} className="w3-col m4">
                         <div className="w3-row">
                             <div className="w3-col m4">
                                 <div className="peg-placeholder">x</div>
                             </div>                             
                             <div className="w3-col m4">
                                 <div className={"peg peg-top " + this.state.pegs[idx][0]}></div>
                             </div>    
                             <div className="w3-col m2">
                                 <div className={"peg peg-top " + this.state.pegs[idx][1]}></div>
                             </div>
                         </div>
                         <div className="w3-row">
                             <div className="w3-col m4">
                                 <div className="peg-placeholder">x</div>
                             </div>                             
                             <div className="w3-col m4">
                                 <div className={"peg " + this.state.pegs[idx][2]}></div>
                             </div>    
                             <div className="w3-col m2">
                                 <div className={"peg " + this.state.pegs[idx][3]}></div>
                             </div>
                         </div>                             
                     </div>);
        return ballArr;    
    }
    renderGuesses() {
        let bindThis = this;
        let guessRender = [];
        if (this.state.guesses == []) {
            return "";
        } else {
            $.each(this.state.guesses, function(idx, ele) {
                guessRender.push(<div key={idx} className="w3-row guess-row">
                                     {bindThis.renderEachBall(idx, ele)}
                                 </div>);
            });
            return guessRender;   
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className="w3-content">
                {this.gameRenderer()}
                {this.renderGuesses()}
            </div>

        );
    }
}
