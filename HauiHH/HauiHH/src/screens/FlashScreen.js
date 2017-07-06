import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';

class FlashScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('./../images/logo.png')} style={{width:120, height:120}}
                 resizeMode='contain'/>
                <Text style={styles.textLarge}>Haui HH</Text>
            </View>
        );
    }
    componentDidMount(){
        const {navigate} = this.props.navigation;
        const {state, dispatch} = this.props;

        AsyncStorage.getItem('cart',(err, result)=>{
            dispatch({
                type:'LOAD_CART',
                cart:JSON.parse(result)
            })
        });

        setTimeout(()=>{
            navigate('Shop')
        },1000);
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
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
        
        marginTop:20
    },
    bgDefault:{
        backgroundColor:'white',
        borderColor:'#00B5FF',
        borderWidth:0.5,
        marginTop:10
    }
})
const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(FlashScreen);