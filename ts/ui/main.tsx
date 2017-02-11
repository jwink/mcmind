import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

class Navigation extends React.Component<any, any> {
    setColors() {
        let colors = [];
        let whichColors = ["white", "yellow", "orange", "red", "purple", "green"];
        let bindThis = this;
        $.each(whichColors, function(idx, ele) {
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
            <div className="w3-content">
                <div className="w3-row">
                    {this.setColors()}
                </div>    
                <div className="w3-row">
                    <div className="w3-col m2">s</div>
                    <div className="w3-col m2"><div className="ball"></div></div>
                    <div className="w3-col m2"></div>
                    <div className="w3-col m2"></div>
                    <div className="w3-col m2"></div>
                    <div className="w3-col m2"></div>
                </div>    
            </div>
        );
    }
}




ReactDOM.render(<Navigation />, document.getElementById('main'));
