import React from 'react';
import './App.css';
import {Tabs} from 'antd';
import Diagram from './component/Diagram/index';
import 'antd/dist/antd.css';

const {TabPane} = Tabs;

function App() {
    function callback(key) {
        window.open(`http://localhost:3000/${key}`, '_self');
    }
    return (
        <Tabs defaultActiveKey={window.location.href.split('/')[3]} onChange={callback}>
            <TabPane tab="Tab 1" key="1">
                <Diagram/>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                <Diagram/>
            </TabPane>
            <TabPane tab="Tab 3" key="3"></TabPane>
        </Tabs>
    );
}

export default App;
