import React from 'react';
import Nav from '../common/Nav';

import Login from '../common/Login';
export default class Layout extends React.Component{
    render(){
        return(
            <div className="layout">
                <div>
                    <Nav/>
                </div>
                <div className="content">
                    <div className="left">
                        {this.props.children}
                    </div>
                    <div className="right">
                        <Login/>
                    </div>
                </div>
            </div>
        );
    }
}