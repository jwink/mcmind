/// <reference types="react" />
import * as React from 'react';
export declare class GameSection extends React.Component<any, any> {
    constructor(props: any);
    onCodeSubmit(playerCode: any): void;
    onGuessSubmit(playerGuess: any): void;
    getPegs(playerGuess: any): any[];
    gameRenderer(): JSX.Element;
    renderEachBall(idx: any, guessArr: any): any[];
    renderGuesses(): any[] | "";
    render(): JSX.Element;
}
