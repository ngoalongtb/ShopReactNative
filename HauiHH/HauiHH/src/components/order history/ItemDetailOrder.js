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
class ItemDetailOrder extends Component{
    constructor(props){
        super(props);
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
                        <Stars fontSize={18}/>
                        <Text>{product.name} </Text>
                        <Text>{product.price}$</Text>
                        <Text> Count: {count} </Text>

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
)(ItemDetailOrder);