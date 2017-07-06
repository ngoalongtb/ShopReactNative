import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {server_api} from './../../config/server';

import {
    Form, Label, Input, Item, Contact, Icon, Drawer
} from 'native-base';

import {connect} from 'react-redux';
import Stars from './../listproduct/Stars';

class Product extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //const {navigate} = this.props.navigation;
        const {state} = this.props;
        

        return(
            <TouchableOpacity style={styles.container} 
                onPress={()=>{state.navigation.navigation.navigate('Detail',{product:this.props.product})}}>
                <Image source={{uri:server_api+'images/'+this.props.product.image}}
                    style={{width:100, height:70, borderRadius:5}}/>
                <Text>{this.props.product.name}</Text>
                <View style={styles.row}>
                    <Stars fontSize={10}/>
                    <Text style={styles.textSmall}>{this.props.product.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginRight:10
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    iconPrimary:{
        color:'#00B5FF',
    },
    mgL10:{
        marginLeft:10
    },
    textSmall:{
        fontSize:10,
        color:'#C2C9D4',
        marginLeft:10
    },
})

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(Product);