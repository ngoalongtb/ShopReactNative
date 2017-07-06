import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';

import {connect} from 'react-redux';

import {
    Form, Label, Input, Item, Contact, Icon
} from 'native-base';

import {login, loginTest} from './../actions';

import {server_api} from './../config/server';

class SignInScreen extends Component{
    constructor(props){
        super(props);
    }
    _login(){
        const {navigate} = this.props.navigation;
        var username = this.state.username;
        var password = this.state.password;
        console.log('username', username);
        console.log('password', password);
        const {dispatch} = this.props;

        fetch(server_api+'users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log("json", json);
                if(json.status == 'success'){
                    ToastAndroid.show('login success',2000)
                    dispatch({
                        type:'LOGIN_SUCCESS',
                        user:json.user
                    });
                    navigate('Shop');
                }else{
                    ToastAndroid.show('login failed',2000)
                }
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    };
    render(){
        const {state} = this.props;
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={{flex:4, justifyContent:'center', alignItems:'center', backgroundColor:'#00B5FF'}}>
                    <Image source={require('./../images/logo.png')} style={{borderRadius:10,width:100, height:100}}
                        resizeMode='contain' />
                    <Text style={{fontSize:20, color:'white'}}>Sign In</Text>
                </View>
                <View style={{flex:7, backgroundColor:'#00B5FF'}}>
                    <View style={{flex:1, marginLeft:20, marginRight:20, alignItems:'center',
                         backgroundColor:'white', borderRadius:5, elevation:2,
                         paddingTop:20, paddingLeft:30, paddingRight:30}}
                         >
                        <Item floatingLabel style={{height:50}}>
                            <Label  style={{fontSize:13}}>Username</Label>
                            <Input onChangeText={(text) => this.setState({username:text})}  style={{fontSize:15}}/>
                        </Item>
                        <Item floatingLabel style={{height:50}}>
                            <Label  style={{fontSize:13}}>Password</Label>
                            <Input onChangeText={(text) => this.setState({password:text})}   style={{fontSize:15}}/>
                        </Item>
                        <TouchableHighlight underlayColor='white'
                            onPress={()=>{this._login()}}
                        >
                            <View style={[styles.btn, styles.bgPrimary]}>
                                <Text style={{color:'white'}}>Sign In </Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Text>Don't have an account</Text>
                            <TouchableHighlight underlayColor='white'
                                 onPress={()=>{navigate('SignUp')}}>
                                <Text style={{color:'#00B5FF'}}> Create now</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        flexDirection:'column'
    },
    textLarge:{
        fontSize:28,
        color:'#2E2D66',
    },
    textSmall:{
        fontSize:10,
        color:'#C2C9D4',
        marginTop:20
    },
    btn:{
        width:200,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        elevation:2
    },
    bgPrimary:{
        backgroundColor:'#00B5FF',
        
        marginTop:20
    },

    bgDefault:{
        backgroundColor:'white',
        borderColor:'#00B5FF',
        borderWidth:0.5,
        marginTop:10
    }
})

const mapStateToProps = state => {
  return {
    state: state
  }
}


export default connect(
    mapStateToProps
)(SignInScreen)