import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon
} from 'native-base';

export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{
                        console.log('navigation',this.props.navigation);
                        this.props.navigation.goBack()}}>
                        {this.props.left}
                    </TouchableOpacity>
                </View>
                <View style={{flex:5, alignItems:'center', justifyContent:'center'}}>
                    {this.props.children}
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'flex-end'}}>
                    {this.props.right}
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        height:40,
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'rgba(0, 181, 255, 0.7)'
    }
})
