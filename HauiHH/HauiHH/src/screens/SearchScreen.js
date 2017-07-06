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

import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';
import {server_api} from './../config/server';
import ItemList from './../components/listproduct/ItemList';


class SearchScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            txtSearch:''
        }
    }
    search(){
        const {state, dispatch} = this.props;

        fetch(server_api+'products/by-name/'+this.state.txtSearch)
        .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log("json", json);
                if(json.status == 'success'){
                    dispatch({
                        type:'SEARCH',
                        products:json.products
                    });
                }else{
                    ToastAndroid.show('login failed',2000)
                }
            }).catch(function(ex) {
               ToastAndroid.show('login failed'+ ex,2000)
            })
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
                    <View style={{height:100, backgroundColor:'#00B5FF'}}>
                        <View style={{height:40}}>
                            <Header left={<Icon style={{color:'white'}} name='ios-arrow-back'/>} navigation={this.props.navigation}>
                                <Text style={{color:'white', fontSize:18}}>Search Product</Text>
                            </Header>
                        </View>
                        <Item rounded style={{height:40,marginTop:10, marginLeft:30, marginRight:30}}>
                            <Input placeholder='type product name' placeholderTextColor='white' onChangeText={(text) => this.setState({txtSearch:text})}  style={{fontSize:15, color:'white', paddingTop:0, paddingBottom:0,
                            paddingLeft:20}}/>
                            <TouchableOpacity onPress={()=>{this.search()}}>
                                <Icon active name='ios-search' style={{color:'white'}}/>
                            </TouchableOpacity>
                        </Item>
                    </View>
                    <View style={{flex:7, backgroundColor:'white',paddingLeft:30, paddingRight:30}}>
                        
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                state.search.length != 0?
                                    state.search.map((item, key)=>{
                                        return <ItemList key={key} index={key} product={item}/>;
                                    }):<Text>No Product</Text>
                            }
                        </ScrollView>
                    </View>
                    <Footer index={3}/>
                </View>
            </Drawer>
        );
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
)(SearchScreen);