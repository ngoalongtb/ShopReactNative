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
    Form, Label, Input, Item, Contact, Icon, Drawer
} from 'native-base';

import {connect} from 'react-redux';
import Stars from './../listproduct/Stars';
import {server_api} from './../../config/server';

//product
class ItemCart extends Component{
    constructor(props){
        super(props);
    }
    addCount(){
        const {dispatch, index} = this.props;

        dispatch({
            type:'ADD_COUNT',
            index
        })
    }
    subCount(){
        const {dispatch, count, index} = this.props;
        if(count <= 1) return;

        dispatch({
            type:'SUB_COUNT',
            index
        })
    }
    removeCart(){
        const {dispatch, index} = this.props;
        dispatch({
            type:'REMOVE_CART',
            index
        })
    }
    render(){
        //const {navigate} = this.props.navigation;
        const {state} = this.props;
        const {product, count, index} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={{uri:server_api+'images/'+product.image}} resizeMode='contain' style={{width:180, height:100}}/>
                    <View style={{flex:1, marginLeft:20, justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>{this.removeCart()}}
                            style={{position:'absolute', right:5,top:5}}>
                            <Icon name='ios-close'/>
                        </TouchableOpacity>
                        <Stars fontSize={18}/>
                        <Text>{product.name} </Text>
                        <Text>{product.price}$</Text>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={()=>{this.subCount()}}>
                                <Text> - </Text>
                            </TouchableOpacity>
                            <Text> {count} </Text>
                            <TouchableOpacity onPress={()=>{this.addCount()}}>
                                <Text> + </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        marginTop:10,
        height:100,
        backgroundColor:'white',
        borderRadius:5,
        elevation:2,
    },
    iconPrimary:{
        color:'#00B5FF',
    },
    mgL10:{
        marginLeft:10
    },
    row:{
        flexDirection:'row',
    }
})

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(ItemCart);