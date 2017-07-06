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
    Icon
} from 'native-base';

import {connect} from 'react-redux';

export default class Stars extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Icon name='ios-star' style={{color:'#FFE800', fontSize:this.props.fontSize}}/>
                <Icon name='ios-star' style={{color:'#FFE800', fontSize:this.props.fontSize}}/>
                <Icon name='ios-star' style={{color:'#FFE800', fontSize:this.props.fontSize}}/>
                <Icon name='ios-star' style={{color:'#FFE800', fontSize:this.props.fontSize}}/>
                <Icon name='ios-star' style={{color:'#FFE800', fontSize:this.props.fontSize}}/>
            </View>
        );
    }
}
const styles =  StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    icons:{
        color:'#FFE800',
        fontSize:8
    }
})

