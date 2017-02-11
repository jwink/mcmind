import * as React from 'react';
import * as $ from 'jquery';

export class ChooseCode extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {whichColors: ["white", "yellow", "orange", "red", "purple", "green"]}
    }
    setColors() {
        let colors = [];
        let bindThis = this;
        $.each(bindThis.state.whichColors, function(idx, ele) {
            colors.push(<div key={idx} 
                             className="w3-col m2">
                                 <div onClick={bindThis.ballClicked.bind(bindThis, ele)} className={"ball " + ele}></div>
                        </div>);

        });
        return colors
    }
    ballClicked(color) {
      console.log(color);
    }    
    render() {
        return (
            <div className="w3-content in-middle">
                <div className="w3-row">
                    {this.setColors()}
                </div>
                <div>Hello World</div>
            </div>

        );
    }
}
