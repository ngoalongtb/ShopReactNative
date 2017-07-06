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

import Footer from './../components/home/Footer';
import Header from './../components/home/Header';
import ItemOrder from './../components/order history/ItemOrder';


import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';
import {server_api} from './../config/server';



class OrderHistoryScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        const {navigate} = this.props.navigation;
        const {state, dispatch} = this.props;

        return(
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<SideBarScreen navigation={this.props.navigation}/>}
               panOpenMask={.25}>
                <View style={styles.container}>
                    <View style={{flex:1, backgroundColor:'#00B5FF'}}>
                        <View style={{height:40}}>
                            <Header left={<Icon style={{color:'white'}}  name='ios-arrow-back'/>} navigation={this.props.navigation}>
                                <Text style={{color:'white', fontSize:18}}>Order history</Text>
                            </Header>
                        </View>
                    </View>
                    <View style={{flex:7, backgroundColor:'white',paddingLeft:30, paddingRight:30}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                (state.orderHistory.length > 0)?
                                    state.orderHistory.map((item, key)=>{
                                        return <ItemOrder order={item} key={key}/>;
                                    }):<Text>No order history</Text>
                            }
                        </ScrollView>
                    </View>
                    <Footer index={1}/>
                </View>
            </Drawer>
        );
    }
    componentDidMount(){
        const {state, dispatch} = this.props;


        fetch(server_api+'orders/by_user/'+state.user.user._id)
        .then(function(response) {
                return response.json();
        }).then(function(json) {
            console.log("json", json);
            if(json.status == 'success'){
                ToastAndroid.show('load order history success',2000)
                dispatch({
                    type:'LOAD_ORDER_HISTORY',
                    orders:json.orders
                })
            }else{
                ToastAndroid.show('error',2000)
            }
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
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
        marginTop:20
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
    }
})

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(OrderHistoryScreen);