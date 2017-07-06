import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    AsyncStorage
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon, Drawer
} from 'native-base';

import Footer from './../components/home/Footer';
import Header from './../components/home/Header';


import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';
import {server_api} from './../config/server';

class DetailScreen extends Component{
    constructor(props){
        super(props);
    }
    buy(){
        const {dispatch, state} = this.props;
        const {product} = this.props.navigation.state.params;
        console.log('product', product);

        let exist = false;
        state.cart.forEach(function(item) {
            console.log('item',item);
            if(item.product._id == product._id)
            {
                exist = true;
            }
        }, this);
        if(exist) {
            ToastAndroid.show('san pham da co trong gio hang',1000);
            return;
        }
        dispatch({
            type:'ADD_PRODUCT',
            product
        });
        ToastAndroid.show('Buy success',1000);

        AsyncStorage.setItem('cart', JSON.stringify([
            ...state.cart,
            {
                product,
                count:1
            }
        ]), ()=>{
            
        });

    }
    render(){
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        const {navigate} = this.props.navigation;
        const {state} = this.props;
        const {product} = this.props.navigation.state.params;
        console.log('props',this.props);
        return(
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<SideBarScreen navigation={this.props.navigation}/>}
                    panOpenMask={.25}>
                <View style={styles.container}>
                    <Header left={<Icon style={{color:'white'}} name='ios-arrow-back'/>} navigation={this.props.navigation}>
                        <Text style={{color:'white', fontSize:18}}>Detail</Text>
                    </Header>
                    <View style={{flex:1, padding:10, margin:10,
                     alignItems:'center', backgroundColor:'white'}}>
                        <Image source={{uri:server_api+'images/'+product.image}} style={{width:300, height:180}}/>
                        
                        <View style={{flex:1, width:300, justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>{navigate('ListProduct', {id:product.category_id._id})}}>
                                <Text style={{color:'#00B5FF'}}>{product.category_id.name}</Text>
                            </TouchableOpacity>
                            <Text style={{alignSelf: 'center', fontSize:24}}>{product.name}</Text>
                            <Text style={{color:'#00B5FF', alignSelf: 'center'}}>{product.price}</Text>
                            <Text style={{fontSize:12, alignSelf:'center', marginTop:10}}>
                                {product.description}
                            </Text>
                            <TouchableOpacity style={{marginTop:20}}
                                onPress={()=>{navigate('Shop')}}>
                                <Text style={{color:'#00B5FF', alignSelf: 'flex-end',marginRight:30}}>More Products</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity underlayColor='white' 
                            style={[styles.btn, styles.bgPrimary]}
                            onPress={()=>{
                                this.buy();
                            }}>
                                <Text style={{color:'white'}}>Buy now</Text>
                        </TouchableOpacity>
                    </View>
                    <Footer index={1}/>
                </View>
            </Drawer>
        );
    }
}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    textLarge:{
        fontSize:28,
        color:'#2E2D66',
    },
    textSmall:{
        fontSize:10,
        color:'#C2C9D4',
        marginTop:20
    },
    btn:{
        width:200,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        elevation:2
    },
    bgPrimary:{
        backgroundColor:'#00B5FF',
        marginTop:20,
        marginBottom:20
    },
    bgDefault:{
        backgroundColor:'white',
        borderColor:'#00B5FF',
        borderWidth:0.5,
        marginTop:10
    },
    paper:{
        backgroundColor:'white',
        elevation:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
    },
    row:{
        flexDirection:'row'
    }
})

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(DetailScreen);