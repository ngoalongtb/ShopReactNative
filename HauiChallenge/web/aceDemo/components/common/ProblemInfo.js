import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles={
    style:{
        width:300
    },
    paperHeader:{
        paddingLeft:10,
        backgroundColor:'#d6d6d6',
        display:'flex',
        justifyContent:'left',
        alignItems:'center',
        height:40
    },
    paperContent:{
        padding:10
    },
    paperFooter:{
        paddingBottom:10,
        paddingTop:10,
        display:'flex',
        justifyContent:'center'
    }
};
export default class ProblemInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            logged:false,
            info:{
                name:'Một bài toán nho',
                score:100,
                type: 'ACM-Score Type',
                timeLimit:'2s',
                memoryLimit:'512MB',
                input:'standard input',
                output:'standard output'
            }
        }
    }
    render(){
        var content, scoreInfo;

        //score
        if(this.state.logged){
            scoreInfo = <div style={styles.paperContent}>
                Login to show your score
            </div>;
        }else{
            scoreInfo =
                <div style={styles.paperContent}>
                    score:{this.state.info.score}
                </div>;
        }



        return(
            <div>
                <Paper style={styles.style} zDepth={1} >
                    <div style={styles.paperHeader}>
                        <span>{this.state.info.name}</span>
                    </div>
                    {scoreInfo}
                    <div style={styles.paperContent}>
                        <div>score type:{this.state.info.type}</div>
                        <div>time limit:{this.state.info.timeLimit}</div>
                        <div>memory limit:{this.state.info.memoryLimit}</div>
                        <div>input type:{this.state.info.input}</div>
                        <div>output type:{this.state.info.output}</div>
                    </div>
                </Paper>
            </div>
        );
    }
}