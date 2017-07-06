import React from 'react';

const styles = {
    center:{
        textAlign:'center'
    }
}
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 style={styles.center}>Haui Challenge</h1>
                <h2 style={styles.center}>Trang web bắt đầu được xây dựng vào ngày 7/5/2017</h2>
            </div>
        );
    }
}