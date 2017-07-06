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

import {server_api} from './../config/server';

import Footer from './../components/home/Footer';
import Header from './../components/home/Header';


import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';
import ListHorizontalProducts from './../components/shop/ListHorizontalProducts';

class ContactScreen extends Component{
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
        const {state} = this.props;
        
        return(
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<SideBarScreen navigation={this.props.navigation}/>}
               panOpenMask={.25}>
                <View style={styles.container}>
                    <Header left={<Icon style={{color:'white'}} name='ios-arrow-back'/>} navigation={this.props.navigation}>
                        <Text style={{color:'white', fontSize:18}}>Contact</Text>
                    </Header>
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <View style={{flex:1}}>

                        </View>
                        <View style={{flex:2, paddingLeft:30, paddingRight:30}}>
                            <View style={styles.viewInfo}>
                                <Text>Name</Text>
                                <Text style={styles.textInfo}>Ta Minh Luan</Text>
                            </View>
                            <View style={styles.viewInfo}>
                                <Text>Email</Text>
                                <Text style={styles.textInfo}>ngoalongtb001@gmail.com</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={[styles.viewInfo,{flex:1, marginRight:5}]}>
                                    <Text>Gender</Text>
                                    <Text style={styles.textInfo}>Male</Text>
                                </View>
                                <View style={[styles.viewInfo,{flex:1, marginLeft:5}]}>
                                    <Text>Age</Text>
                                    <Text style={styles.textInfo}>21</Text>
                                </View>
                            </View>
                            <View style={styles.viewInfo}>
                                <Text>Phone number</Text>
                                <Text style={styles.textInfo}>0966 810 905</Text>
                            </View>
                        </View>
                    </View>
                    <Footer index={4}/>
                </View>
            </Drawer>
        );
    }
    componentDidMount(){
        var {dispatch, state} = this.props;
        const {navigate} = this.props.navigation;
        dispatch({
            type:'LOAD_NAVIGATION',
            navigation:this.props.navigation
        });

        fetch(server_api+'categorys').then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log("json", json);
                if(json.status == 'success'){
                    dispatch({
                        type:'LOAD_CATEGORYS',
                        categorys:json.categorys
                    });
                }else{
                    ToastAndroid.show('load failed',2000)
                }
            })
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    viewInfo:{  
        marginTop:10,
        flexDirection:'row',
        backgroundColor:'#F4F9FF',
        height:40,
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    textInfo:{
        color:'#00B5FF'
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
)(ContactScreen);