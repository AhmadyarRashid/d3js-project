import React, {Component} from 'react';

class Tab1 extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(window.location.href.split('/')[3] == 1) {
            require('./index.css');
        } else if(window.location.href.split('/')[3] == 2) {
            require('./diagram2.css');
        }else {
            require('./index.css');
        }
    }

    render(){
        return(
            <div>
                <div id="heatmap1"></div>

                <div id="d3tooltip1">
                    <p><span id="value1"></span></p>
                </div>
            </div>
        )
    }
}

export default Tab1;
