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

import {server_api} from './../../config/server';

//product
class ItemOrder extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //const {navigate} = this.props.navigation;
        const {state} = this.props;
        const {order} = this.props;
        const {products} = order;
        const {navigate} = state.navigation.navigation;

        console.log("state order", state);
        return(
            <TouchableOpacity style={styles.container} onPress={()=>{navigate('DetailOrder', {products})}}>
                <View style={styles.row}>
                    <View style={{flex:1, marginLeft:20, justifyContent:'center'}}>
                        <Text>Total: {order.total} </Text>
                    </View>
                </View>
            </TouchableOpacity>
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
)(ItemOrder);