/// <reference types="react" />
import * as React from 'react';
export declare class GameSection extends React.Component<any, any> {
    constructor(props: any);
    onCodeSubmit(playerCode: any): void;
    onGuessSubmit(playerGuess: any): void;
    gameRenderer(): JSX.Element;
    render(): JSX.Element;
}
