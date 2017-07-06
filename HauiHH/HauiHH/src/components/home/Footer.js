import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon
} from 'native-base';
import {connect} from 'react-redux';


//index 
class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('footer render, props:',this.props);
        const {index} = this.props;
        var navigate = new Function();
        console.log('state', this.props.state.navigation.navigation);
        if(this.props.state.navigation.navigation != undefined)
        {
            navigate = this.props.state.navigation.navigation.navigate;
            console.log(navigate);
        }
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.footerItem}
                    onPress={()=>{navigate('Shop')}}
                >
                    <Icon name="ios-apps" style={{color:index==1?'#00B5FF':'#aaa', fontSize:18}}/>
                    <Text style={styles.textSmall}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}
                    onPress={()=>{index!=2&&navigate('Cart')}}
                >
                    <Icon name="ios-cart" style={{color:index==2?'#00B5FF':'#aaa', fontSize:18}}/>
                    <Text style={styles.textSmall}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}
                    onPress={()=>{index!=3&&navigate('Search')}}
                >
                    <Icon name="ios-search" style={{color:index==3?'#00B5FF':'#aaa', fontSize:18}}/>
                    <Text style={styles.textSmall}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}
                    onPress={()=>{index!=4&&navigate('Contact')}}
                >
                    <Icon name="ios-contact" style={{color:index==4?'#00B5FF':'#aaa', fontSize:18}}/>
                    <Text style={styles.textSmall}>Contact</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40,
        elevation:10,
        backgroundColor:'white'
    },
    footerItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:1,
        borderColor:'#eee'
    },
    textSmall:{
        fontSize:10
    },
    icon:{
        color:'#eee'
    }
})
const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(Footer);