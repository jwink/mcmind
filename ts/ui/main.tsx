import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import {TitleArea} from './titleSection';
import {GameSection} from './gameSection';
import {ChooseCode} from './chooseCode';

class Navigation extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {whichColors: ["white", "yellow", "orange", "red", "purple", "green"]}
    }
    setColors() {
        let colors = [];
        let bindThis = this;
        $.each(bindThis.state.whichColors, function(idx, ele) {
            colors.push(<div key={idx} 
                             className="try-inline">
                                 <div onClick={bindThis.ballClicked.bind(bindThis, ele)} className={"ball " + ele}></div>
                        </div>);

        });
        return colors
    }
    ballClicked(color) {
      console.log(color);
    }
    componentDidMount() {
        let allColors = ["white", "yellow", "orange", "red", "purple", "green"];
        function getIndex() {
          let rand = Math.round((Math.random()*100));
          return (rand % 6);
        }
        let bindThis = this;
        function resetColor(){
            let whichIndex = getIndex();
            let whichColor = getIndex();
            let currObj = bindThis.state.whichColors;
            currObj[whichIndex] = allColors[whichColor];
            bindThis.setState({whichColors: currObj});
        }
        let changeColor = setInterval(resetColor, 50);
        setTimeout(function(){clearInterval(changeColor); bindThis.setState({whichColors: allColors}); }, 1000);
    }
    render() {
        return (
            <div className="w3-content in-middle">
                <div className="w3-row">
                    {this.setColors()}
                </div>
                <div className="w3-row in-middle">
                    <div className="w3-col w3-half our-button">
                        <a href="#two" className="our-button-sub">2-Player</a>
                    </div>    
                    <div className="w3-col w3-half our-button">
                        <a href="#one" className="our-button-sub">1-Player</a>
                    </div>
                </div>       
            </div>
        );
    }
}

function randomCode() {
    let randCode = [];
    let allColors = ["white", "yellow", "orange", "red", "purple", "green"];
    function getIndex() {
        let rand = Math.round((Math.random()*100));
        return (rand % 6);
    }
    for (var i=0;i<4; i++) {
      randCode.push(allColors[getIndex()]);
    }
    return randCode;  
}


ReactDOM.render(<TitleArea />, document.getElementById('title_section'));
ReactDOM.render(<Navigation />, document.getElementById('main'));
location.hash = "#nav";

window.onhashchange = function() {
    let whichClass = location.hash;
    if (whichClass == '#nav') {
      ReactDOM.render(<Navigation />, document.getElementById('main'));
    } else if (whichClass=="#two") {
      ReactDOM.render(<GameSection codeSet={false} secretCode={[null, null, null, null]}/>, document.getElementById('main'));
    } else if (whichClass=="#one") {
      ReactDOM.render(<GameSection codeSet={true} secretCode={randomCode()} />, document.getElementById('main'));      
    } else {
      ReactDOM.render(<div>No Bueno</div>, document.getElementById('main'));
    }
}

