import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import AceEditor from 'react-ace';
import 'brace/mode/c_cpp';
import 'brace/theme/xcode';

import axios from 'axios';

export default class Editor extends React.Component{
    constructor(props){
        super(props);
    }
    onChange(newValue) {
        this.text = newValue;
    }
    sendCode(){
        axios.post('http://localhost:1111', {
            data: this.text,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <RaisedButton label="Send" onTouchTap={()=>{this.sendCode()}}/>

                <AceEditor
                    ref="acc"
                    mode="c_cpp"
                    theme="xcode"
                    onChange={this.onChange.bind(this)}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />
            </div>
        );
    }
}