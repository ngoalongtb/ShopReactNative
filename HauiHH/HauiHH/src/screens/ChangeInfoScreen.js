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
import ItemCart from './../components/cart/ItemCart';

import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';




class ChangeInfoScreen extends Component{
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
                    <View style={{flex:3, backgroundColor:'#00B5FF'}}>
                        <View style={{height:40}}>
                            <Header left={<Icon style={{color:'white'}} name='ios-arrow-back'/>} navigation={this.props.navigation}>
                                <Text style={{color:'white', fontSize:18}}>Change info</Text>
                            </Header>
                        </View>
                    </View>
                    <View style={{flex:7, backgroundColor:'#00B5FF'}}>
                        <View style={{flex:1, marginLeft:20, marginRight:20, alignItems:'center',
                            backgroundColor:'white', borderRadius:5, elevation:2,
                            paddingTop:20, paddingLeft:30, paddingRight:30}}
                            >
                            <Item floatingLabel style={{height:50}}>
                                <Label style={{fontSize:13}}>password</Label>
                                <Input  style={{fontSize:15}} onChangeText={(text) => this.setState({password:text})} />
                            </Item>
                            <Item floatingLabel style={{height:50}}>
                                <Label style={{fontSize:13}}>new pass</Label>
                                <Input  style={{fontSize:15}} onChangeText={(text) => this.setState({newpass:text})} />
                            </Item>
                            <Item floatingLabel style={{height:50}}>
                                <Label style={{fontSize:13}}>repass</Label>
                                <Input style={{fontSize:15}} onChangeText={(text) => this.setState({repass:text})}/>
                            </Item>

                            <TouchableHighlight underlayColor='white'
                                onPress={()=>{}}
                            >
                                <View style={[styles.btn, styles.bgPrimary]}>
                                    <Text style={{color:'white'}}>Save change</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
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
)(ChangeInfoScreen);