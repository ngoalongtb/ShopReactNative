import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default class MainScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
               <Button title='Main' onPress={()=>{navigate('Main')}}></Button>
               <Button title='Flash' onPress={()=>{navigate('Flash')}}></Button>
               <Button title='Welcome' onPress={()=>{navigate('Welcome')}}></Button>
               <Button title='SignUp' onPress={()=>{navigate('SignUp')}}></Button>
               <Button title='SignIn' onPress={()=>{navigate('SignIn')}}></Button>
               <Button title='Home' onPress={()=>{navigate('Home')}}></Button>
               <Button title='SideBar' onPress={()=>{navigate('SideBar')}}></Button>
               <Button title='Chang info' onPress={()=>{navigate('ChangeInfo')}}></Button>
               <Button title='List Product' onPress={()=>{navigate('ListProduct')}}></Button>
               <Button title='Shop' onPress={()=>{navigate('Shop')}}></Button>
               <Button title='Detail' onPress={()=>{navigate('Detail')}}></Button>
               <Button title='Cart' onPress={()=>{navigate('Cart')}}></Button>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
    }
})
