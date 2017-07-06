import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Editor from './Editor';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};
export default class ProblemContent extends React.Component{
    constructor(){
        super();
        this.state = {
            slideIndex:0
        }
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    render(){
        return(
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Statement" value={0} />
                    <Tab label="Submit" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        this is đề bài<br />
                    </div>
                    <div style={styles.slide}>
                        <Editor/>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}