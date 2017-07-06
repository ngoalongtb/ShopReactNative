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

import Footer from './../components/home/Footer';
import Header from './../components/home/Header';

import SideBarScreen from  './SideBarScreen';
import {connect} from 'react-redux';

class HomeScreen extends Component{
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
                    <View style={{flex:4, backgroundColor:'#00B5FF'}}>
                        <View style={{height:40}}>
                            <Header left={<Icon  name='ios-arrow-back'/>} navigation={this.props.navigation}>
                                <Text>Xin chao</Text>
                            </Header>
                        </View>
                    </View>
                    <View style={{flex:7, backgroundColor:'#00B5FF',paddingLeft:30, paddingRight:30}}>
                        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>navigate('ListProduct')} style={styles.paper}>
                                <Text>A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigate('ListProduct')} style={styles.paper}>
                                <Text>B</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>navigate('ListProduct')} style={styles.paper}>
                                <Text>C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigate('ListProduct')} style={styles.paper}>
                                <Text>D</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Footer/>
                </View>
            </Drawer>
        );
    }
    componentDidMount(){
        const {navigate} = this.props.navigation;
        const {dispatch, state} = this.props;
        dispatch({
            type:'LOAD_NAVIGATION',
            navigation:this.props.navigation
        });
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    textLarge:{
        fontSize:28,
        color:'#2E2D66'
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
)(HomeScreen);