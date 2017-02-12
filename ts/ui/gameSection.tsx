
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
            return(<ChooseCode gameCallback={this.onGuessSubmit.bind(this)} />);
        } else {
            return(
                <ChooseCode gameCallback={this.onCodeSubmit.bind(this)} />
            );
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className="w3-content in-middle">
                {this.gameRenderer()}
            </div>

        );
    }
}
