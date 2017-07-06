import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

export default class MainScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('./../images/logo.png')} style={{width:100, height:100}}
                 resizeMode='contain'/>
                <Text style={styles.textLarge}>Haui HH</Text>
                <Text style={styles.textSmall}>Best for work and study</Text>
                <TouchableHighlight underlayColor='white'
                    onPress={()=>{navigate('SignIn')}}
                >
                    <View style={[styles.btn, styles.bgPrimary]}>
                        <Text style={{color:'white'}}>Sign In</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='white'
                    onPress={()=>{navigate('SignUp')}}>
                    <View style={[styles.btn, styles.bgDefault]}>
                        <Text style={{color:'#00B5FF'}}>Sign Up</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
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
