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
        padding:10,
    },
    paperFooter:{
        paddingBottom:10,
        paddingTop:10,
        display:'flex',
        justifyContent:'space-around'
    }
};
export default class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            logged:true,
            info:{
                name:'long',
                score:1000,
                ranking:'master',
                rating:1500
            }
        }
    }
    render(){
        var content, header, footer;

        //content
        if(this.state.logged){
            content = <div style={styles.paperContent}>
                <div>score: {this.state.info.score}</div>
                <div>ranking:{this.state.info.ranking}</div>
                <div>rating:{this.state.info.rating}</div>
            </div>;
        }else{
            content =
                <div style={styles.paperContent}>
                    <TextField hintText="type username"/>
                    <TextField hintText="type password"/>
                </div>;
        }

        //footer
        if(this.state.logged){
            footer = <div style={styles.paperFooter}>
                <RaisedButton label="Default"/>
                <RaisedButton label="Log out" primary={true} />
            </div>;
        }else{
            footer =
                <div style={styles.paperFooter}>
                    <RaisedButton label="Login" primary={true}/>
                </div>;
        }

        return(
            <div>
                <Paper style={styles.style} zDepth={1} >
                    <div style={styles.paperHeader}>
                        <span>{this.state.logged?this.state.info.name:"Long"}</span>
                    </div>
                    {content}
                    {footer}
                </Paper>
            </div>
        );
    }
}