import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

import {
    Icon
} from 'native-base';

import {connect} from 'react-redux';
import {server_api} from './../../config/server';

class FooterCart extends Component{
    constructor(props){
        super(props);
    }
    pay(){
        const {state, dispatch} = this.props;

        if(!state.user.logged){
            ToastAndroid.show('Please login to pay',2000);
            return;
        }
        var total = 0;

        state.cart.forEach(function(item) {
            total += item.product.price*item.count;
        }, this);

        if(total == 0) return;

        fetch(server_api+'orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: state.user.user._id,
                    products: state.cart,
                    total
                })
            }).then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log("json", json);
                if(json.status == 'success'){
                    ToastAndroid.show('pay success',2000)
                    dispatch({
                        type:'PAY'
                    })
                }else{
                    ToastAndroid.show('error',2000)
                }
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            });
    }
    render(){
        const {state, dispatch} = this.props;
        var total = 0;

        state.cart.forEach(function(item) {
            total += item.product.price*item.count;
        }, this);

        return(
            <TouchableOpacity style={styles.container} onPress={()=>{this.pay()}}>
                <Text style={styles.text}>PAY {total}$</Text>
            </TouchableOpacity>
        );
    }
}
const styles =  StyleSheet.create({
    container:{
        flexDirection:'row',
        height:30,
        backgroundColor:'#00B5FF',  
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    text:{
        color:'white',
    }
})


const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(FooterCart);
