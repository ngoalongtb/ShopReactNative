import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    Form, Label, Input, Item, Contact, Icon, Drawer
} from 'native-base';

import {connect} from 'react-redux';
//id 

class HeaderProducts extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {state, id} = this.props;
        const {navigate} = state.navigation.navigation;

        return(
            <View style={styles.container}>
                <TouchableOpacity style={{flex:1}} 
                    onPress={()=>{navigate('ListProduct',{id:id})}}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Icon style={{marginRight:10,color:'#00B5FF',fontSize:18}} name='ios-arrow-dropleft' />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon style={{marginRight:10,color:'#00B5FF',fontSize:18}} name='ios-arrow-dropright'/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        fontSize:10
    },
    title:{
        fontSize:18,
    }

})
const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(
    mapStateToProps
)(HeaderProducts);