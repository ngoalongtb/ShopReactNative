import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon
} from 'native-base';
import {server_api} from './../config/server';

import {connect} from 'react-redux';

class SignUpScreen extends Component{
    constructor(props){
        super(props);
    }
    _signUp(){
        const {navigate} = this.props.navigation;
        var fullname = this.state.fullname;
        var username = this.state.username;
        var password = this.state.password;

        console.log('fullname', fullname);
        console.log('username', username);
        console.log('password', password);
        const {dispatch} = this.props;

        fetch(server_api+'users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullname: fullname,
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
                        user:json
                    });
                    navigate('Home');
                }else{
                    ToastAndroid.show('error',2000)
                }
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <View style={{flex:4, justifyContent:'center', alignItems:'center', backgroundColor:'#00B5FF'}}>
                    <Image source={require('./../images/logo.png')} style={{borderRadius:10,width:100, height:100}}
                        resizeMode='contain'/>
                    <Text style={{fontSize:20, color:'white'}}>Sign Up</Text>
                </View>
                <View style={{flex:7, backgroundColor:'#00B5FF'}}>
                    <View style={{flex:1, marginLeft:20, marginRight:20, alignItems:'center',
                         backgroundColor:'white', borderRadius:5, elevation:2,
                         paddingTop:20, paddingLeft:30, paddingRight:30}}
                         >
                        <Item floatingLabel style={{height:50}}>
                            <Label style={{fontSize:13}}>Fullname</Label>
                            <Input  style={{fontSize:15}} onChangeText={(text) => this.setState({fullname:text})} />
                        </Item>
                        <Item floatingLabel style={{height:50}}>
                            <Label style={{fontSize:13}}>Username</Label>
                            <Input  style={{fontSize:15}} onChangeText={(text) => this.setState({username:text})} />
                        </Item>
                        <Item floatingLabel style={{height:50}}>
                            <Label style={{fontSize:13}}>Password</Label>
                            <Input  style={{fontSize:15}} onChangeText={(text) => this.setState({password:text})} />
                        </Item>

                        <TouchableHighlight underlayColor='white'
                            onPress={()=>{this._signUp()}}
                        >
                            <View style={[styles.btn, styles.bgPrimary]}>
                                <Text style={{color:'white'}}>Sign Up </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='white'
                            onPress={()=>{navigate('SignIn')}}
                        >
                            <View style={[styles.btn, styles.bgFacebook]}>
                                <Text style={{color:'white'}}>Sign in with facebook</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <Text>Already have an account</Text>
                            <TouchableHighlight underlayColor='white'
                                 onPress={()=>{navigate('SignIn')}}>
                                <Text style={{color:'#00B5FF'}}> Sign in</Text>
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
        bgFacebook:{
        backgroundColor:'#333BB6',
        
        marginTop:10
    },
    bgDefault:{
        backgroundColor:'white',
        borderColor:'#00B5FF',
        borderWidth:0.5,
        marginTop:10
    }
})
export default connect()(SignUpScreen);