import React from 'react';
import {Link} from 'react-router';

const styles = {
    nav:{
        height:50,
        backgroundColor:'#333'
    },
    ul:{
        height:50,
        listStyle:'none',
        margin:0,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-start',
        alignItems:'center'
    },
    li:{
        padding:10,
        fontSize:16,
    },
    a:{
        textDecoration:'none',
        color:'white'
    }
}

export default class Nav extends React.Component{
    render(){
        return(
            <div style={styles.nav}>
                <ul style={styles.ul}>
                    <li style={styles.li}><Link style={styles.a} to="/home">Home</Link></li>
                    <li style={styles.li}><Link style={styles.a} to="/posts">Posts</Link></li>
                    <li style={styles.li}><Link style={styles.a} to="/problems">Problems</Link></li>
                    <li style={styles.li}><Link style={styles.a} to="/rank">Rank</Link></li>
                    <li style={styles.li}><Link style={styles.a} to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}