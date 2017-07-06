import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon
} from 'native-base';

import {logout} from './../actions';

class SideBarScreen extends Component{
    constructor(props){
        super(props);
    }
    _logout(){
        const {navigate} = this.props.navigation;
        const {dispatch} = this.props;
        dispatch(logout());
    }
    render(){
        const {navigate} = this.props.navigation;
        const {dispatch, state} = this.props;

        const changInfo = 
            <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                    <Icon name='ios-document' style={{color:'#00B5FF'}}/>
                </View>
                <TouchableOpacity style={styles.subView} onPress={()=>{navigate('ChangeInfo')}}>
                    <Text style={styles.textGrey}>Change info</Text>
                </TouchableOpacity>
            </View>
        
        const signIn = 
            <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                    <Icon name='md-log-in' style={{color:'#00B5FF'}}/>
                </View>
                <TouchableOpacity style={styles.subView} onPress={()=>{navigate('SignIn')}}>
                    <Text style={styles.textGrey}>Sign in</Text>
                </TouchableOpacity>
            </View>;

        const orderHistory = 
            <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                    <Icon name='ios-archive' style={{color:'#00B5FF'}}/>
                </View>
                <TouchableOpacity style={styles.subView} onPress={()=>{navigate('OrderHistory')}}>
                    <Text style={styles.textGrey}>Order history</Text>
                </TouchableOpacity>
            </View>;


        return(
            <View style={styles.container}>
                <View style={{flex:4,elevation:5, justifyContent:'center', alignItems:'center', backgroundColor:'#00B5FF'}}>
                    <Image source={require('./../images/logo.png')} style={{borderRadius:50,width:100, height:100}}
                        resizeMode='contain'/>
                    <Text style={{fontSize:20, color:'white'}}>{(state.user.logged)?state.user.user.username:""}</Text>
                </View>
                <View style={{flex:7, backgroundColor:'white', paddingLeft:30, paddingRight:30}}>
                    {
                        (state.user.logged)? changInfo: signIn
                    }
                    {
                        (state.user.logged)&& orderHistory
                    }
                    
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name='ios-notifications' style={{color:'#00B5FF'}}/>
                        </View>
                        <TouchableOpacity style={styles.subView}>
                                <Text style={styles.textGrey}>Notifycation</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name='ios-bug' style={{color:'#00B5FF'}}/>
                        </View>
                        <TouchableOpacity style={styles.subView}>
                                <Text style={styles.textGrey}>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Icon name='ios-help-circle' style={{color:'#00B5FF'}}/>
                        </View>
                        <TouchableOpacity style={styles.subView}>
                                <Text style={styles.textGrey}>Help</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerItem} onPress={()=>this._logout()}>
                            <Icon name='settings' style={{color:'#aaa'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerItem} onPress={()=>this._logout()}>
                            <Icon name='log-out' style={{color:'#aaa'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column'
    },
    iconContainer:{
        flex:1,
        justifyContent:'center',
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
    itemContainer:{
        flexDirection:'row',
        height:60
    },
    textGrey:{
        color:'grey'
    },
    subView:{
        flex:5,
        borderBottomWidth:1,
        borderBottomColor:'#eee', 
        justifyContent:'center'
    },
    footer:{
        flexDirection:'row',
        height:50,

    },
    footerItem:{
        flex:1,
        borderWidth:1,
        borderColor:'#eee', 
        justifyContent:'center',
        alignItems:'center'
    }
})

const mapStateToProps = (state) => {
    return {
        state:state
    }
} 
export default connect(
    mapStateToProps
)(SideBarScreen);