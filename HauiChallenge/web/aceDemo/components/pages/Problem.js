import React from 'react';
import Paper from 'material-ui/Paper';


import ProblemInfo from '../common/ProblemInfo';
import ProblemContent from '../common/ProblemContent';

//<h1>This is problem {this.props.params.id}</h1>
export default class Problem extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div>
                    <ProblemInfo/>
                </div>
                <div>
                    <ProblemContent/>
                </div>
            </div>
        );

    }
}