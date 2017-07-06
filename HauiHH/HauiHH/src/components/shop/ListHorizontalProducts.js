import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    ToastAndroid
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon, Drawer
} from 'native-base';

import {connect} from 'react-redux';
import HeaderProducts from './HeaderProducts';
import Product from './Product';
import {server_api} from './../../config/server';

//name category
//id category

class ListHorizontalProducts extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {state, dispatch} = this.props;
        const id = this.props.id;

        //console.log('shop state',state);
        // console.log('id',id);

        return(
            <View style={styles.container}>
                <HeaderProducts title={this.props.name} id={id}/>
                <ScrollView horizontal={true} style={{marginTop:10}} showsHorizontalScrollIndicator={false}>
                    {
                        (state.shop.products != undefined && state.shop.products[id] != undefined)?
                            state.shop.products[id].map((item, key)=>{
                                return <Product key={key} product={item}/>;
                            }):<Text>Loading...</Text>
                    }
                </ScrollView>
            </View>
        );
    }
    componentDidMount(){
        var {dispatch, state} = this.props;
        const id = this.props.id;
        fetch(server_api+'products/by-category/'+this.props.id)
        .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log("json", json);
                if(json.status == 'success'){
                    dispatch({
                        type:'LOAD_PRODUCTS',
                        id,
                        products:json.products
                    });
                }else{
                    ToastAndroid.show('load product failed',2000)
                }
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
}
const styles =  StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:'white',
    },
    product:{
        marginTop:20
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
)(ListHorizontalProducts);