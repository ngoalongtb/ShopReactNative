import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon, Drawer
} from 'native-base';

import Footer from './../components/home/Footer';
import Header from './../components/home/Header';
import HeaderList from './../components/listproduct/HeaderList';
import ItemList from './../components/listproduct/ItemList';

import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';

//id (category_id) from navigation

class ListProductScreen extends Component{
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
        const {id} = this.props.navigation.state.params;

        return(
            <Drawer ref={(ref) => { this.drawer = ref; }}
                content={<SideBarScreen navigation={this.props.navigation}/>}
               panOpenMask={.25}>
                <View style={styles.container}>
                    <View style={{height:40}}>
                        <Header left={<Icon style={{color:'white'}}  name='ios-arrow-back'/>} navigation={this.props.navigation}>
                            <Text style={{color:'white', fontSize:18}}>List product</Text>
                        </Header>
                    </View>
                    <View style={{flex:1, backgroundColor:'white',paddingLeft:30, paddingRight:30}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                (state.shop.products != undefined && state.shop.products[id] != undefined)?
                                    state.shop.products[id].map((item, key)=>{
                                        return <ItemList key={key} product={item}/>;
                                    }):<Text>Loading...</Text>
                            }
                        </ScrollView>
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
)(ListProductScreen);