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
import Stars from './Stars';
import {server_api} from './../../config/server';

//product
class ItemList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //const {navigate} = this.props.navigation;
        const {state} = this.props;
        const {product} = this.props;
        return(
            <TouchableOpacity style={styles.container} 
                onPress={()=>{state.navigation.navigation.navigate('Detail',{product})}}>
                <View style={styles.row}>
                    <Image source={{uri:server_api+'images/'+product.image}} resizeMode='contain' style={{width:180, height:100}}/>
                    <View style={{flex:1, marginLeft:20, justifyContent:'center'}}>
                        <Stars fontSize={18}/>
                        <Text>{product.name} </Text>
                        <Text>{product.price}$</Text>
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
)(ItemList);