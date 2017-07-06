import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import AceEditor from 'react-ace';
import 'brace/mode/c_cpp';
import 'brace/mode/csharp';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/pascal';

import 'brace/theme/xcode';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/terminal';
import 'brace/theme/tomorrow_night';

import axios from 'axios';

export default class Editor extends React.Component{
    constructor(props){
        super(props);
        this.text = this.text==undefined?localStorage.getItem("editor"):this.text;
        this.modes = ["c_cpp", "csharp", "java", "javascript", "pascal"];
        this.themes = ["xcode", "github", "monokai", "terminal", "tomorrow_night"];
        this.state = {
            mode:0,
            theme:0
        }
    }
    onChange(newValue) {
        this.text = newValue;
    }
    sendCode(){
        localStorage.setItem("editor",this.text);
        window.postMessage(this.text,"*");
    }

    handleModeChange = (event, index, value) => this.setState({
        ...this.state,
        mode:value
    });
    handleThemeChange = (event, index, value) => this.setState({
        ...this.state,
        theme:value
    });

    render(){
        return(
            <div style={{width:this.props.width, height:this.props.height}}>
                <div className="flex">
                    <div>
                        <DropDownMenu value={this.state.mode} onChange={this.handleModeChange}>
                            {this.modes.map((item, key)=>{
                                return <MenuItem value={key} key={key} primaryText={item} />
                            })}
                        </DropDownMenu>
                    </div>
                    <div>
                        <DropDownMenu value={this.state.theme} onChange={this.handleThemeChange}>
                            {this.themes.map((item, key)=>{
                                return <MenuItem value={key} key={key} primaryText={item} />
                            })}
                        </DropDownMenu>
                    </div>
                    <div className="mgTop10">
                        <RaisedButton label="Send" onTouchTap={()=>{this.sendCode()}}/>
                    </div>

                </div>

                <AceEditor
                    ref="acc"
                    mode={this.modes[this.state.mode]}
                    theme={this.themes[this.state.theme]}
                    fontSize={15}
                    onChange={this.onChange.bind(this)}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    style={{}}
                    value={this.text}
                />
            </div>
        );
    }
}