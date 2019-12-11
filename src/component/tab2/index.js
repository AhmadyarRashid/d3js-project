import React, {Component} from 'react';
import './index.css';

class Tab2 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div id="heatmap"></div>

                <div id="d3tooltip">
                    <p><span id="value"></span></p>
                </div>
            </div>
        )
    }
}

export default Tab2;