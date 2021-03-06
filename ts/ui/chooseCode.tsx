import * as React from 'react';
import * as $ from 'jquery';

export class ChooseCode extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {whichColors: ["white", "yellow", "orange", "red", "purple", "green"],
                    codeColors: ["lightgray", "lightgray", "lightgray", "lightgray"],
                    selectedBox: "none",
                    codeSubmitted: false}
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
      let codeSections = ["sec1", "sec2", "sec3", "sec4"];
      let currColors = this.state.codeColors;
      if (codeSections.indexOf(this.state.selectedBox) != -1) {
          currColors[codeSections.indexOf(this.state.selectedBox)] = color;
      }
      this.setState({codeColors: currColors, selectedBox: "none"});
    }
    boxSelected(section) {
        //console.log(section);
        if (this.state.selectedBox == section) {
            this.setState({selectedBox: "none"});
        } else {
            this.setState({selectedBox: section});
        }
    }
    codeSubmit() {
        if (this.state.codeColors.indexOf("lightgray") != -1) {
            this.setState({codeSubmitted: true});
        } else {
            // console.log(this.state.codeColors);
            // console.log(this.props);
            this.setState({whichColors: ["white", "yellow", "orange", "red", "purple", "green"],
                    codeColors: ["lightgray", "lightgray", "lightgray", "lightgray"],
                    selectedBox: "none",
                    codeSubmitted: false});
            this.props.gameCallback(this.state.codeColors);
        }
    }
    codeChooser() {
        let bindThis = this;
        let codeOutput = [];
        let codeSections = ["sec1", "sec2", "sec3", "sec4"];
        $.each(bindThis.state.codeColors, function(idx, ele) {
            let boxClass = "";
            if (bindThis.state.selectedBox == codeSections[idx]) {
               boxClass = "code-box selected-box";
            }  else {
               boxClass = "code-box deselected-box";
            }
            codeOutput.push(<div key={idx} className="w3-col m3">
                                <div onClick={bindThis.boxSelected.bind(bindThis,codeSections[idx])}
                                     className={boxClass}>
                                     <div className={"ball " + ele}>
                                     </div>
                                </div>
                            </div>);
        });
        return codeOutput;
    }
    submitMessage() {
        if (this.state.codeSubmitted) {
            return (
                <div className="w3-row some-distance submit-message">
                    <div className="w3-col m12">
                        Code Is Incomplete!  Please Select All Four Colors...
                    </div>    
                </div>
            );
        } else {
            return "";
        }
    }
    render() {
        return (
            <div className="w3-content some-distance">
                <div className="w3-row">
                    {this.setColors()}
                </div>
                <div className="w3-row some-distance">{this.codeChooser()}</div>
                <div className="w3-row some-distance">
                    <div onClick={this.codeSubmit.bind(this)} className="w3-col m12 our-button">
                        <a href={location.hash} className="our-button-sub">Submit!</a>
                    </div>    
                </div>
                {this.submitMessage()}
            </div>

        );
    }
}
