
import * as React from 'react';
import * as $ from 'jquery';
import {ChooseCode} from './chooseCode';

export class GameSection extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {codeSet: this.props.codeSet, secretCode: this.props.secretCode, guesses: []};
    }
    onCodeSubmit(playerCode) {
        this.setState({secretCode: playerCode, codeSet: true});
    }
    onGuessSubmit(playerGuess) {
        console.log(playerGuess);
        let currGuesses = this.state.guesses;
        currGuesses.unshift(playerGuess);
        this.setState({guesses: currGuesses});
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
    renderEachBall(guessArr) {
        let ballArr = [];
        $.each(guessArr, function(idx, ele) {
            ballArr.push(<div key={idx} className="w3-col m2">
                            <div className={"small-ball " + ele}></div>
                        </div>
            );
        });
        ballArr.push(<div key={4} className="w3-col m4">
                         <div className="w3-row">
                             <div className="w3-col m12">
                                 Hello
                             </div>    
                         </div>
                         <div className="w3-row">
                             <div className="w3-col m12">
                                 World
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
                                     {bindThis.renderEachBall(ele)}
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
