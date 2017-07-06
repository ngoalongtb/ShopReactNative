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

import {connect} from 'react-redux';

class HeaderResult extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        const {state} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.itemRow}>
                    <Icon style={{color:'#00B5FF'}} name='ios-bookmark-outline'/>
                        <Text style={styles.mgL10}>Duibai</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Icon style={{color:'#00B5FF'}} name='ios-bookmark-outline'/>
                        <Text style={styles.mgL10}>Duibai</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Icon style={{color:'#00B5FF'}} name='ios-bookmark-outline'/>
                        <Text style={styles.mgL10}>Duibai</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.itemRow}>
                        <Icon style={{color:'#00B5FF'}} name='ios-bookmark-outline'/>
                        <Text style={styles.mgL10}>Duibai</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Icon style={{color:'#00B5FF'}} name='ios-bookmark-outline'/>
                        <Text style={styles.mgL10}>Duibai</Text>
                    </View>
                    <View style={styles.itemRow}>
                        <Icon style={{color:'#00B5FF'}} name='ios-bookmark-outline'/>
                        <Text style={styles.mgL10}>Duibai</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container:{
        height:80,
        padding:10,
        backgroundColor:'white',
        borderRadius:5,
        elevation:2,

    },
    iconPrimary:{
        color:'#00B5FF',
    },
    mgL10:{
        marginLeft:10
    },
    row:{
        flexDirection:'row',
    },
    itemRow:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
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
)(HeaderResult);