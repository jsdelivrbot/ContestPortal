import React, {Component} from 'react';

import Timer from './timer.js';
import ProblemList from './problemlist';
import ProblemDescription from './problemdescription';

class Contest extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Timer/>
                <ProblemList />
                <ProblemDescription probCode={this.props.match.params.code}/>
            </div>
        )
    }
}

export default Contest;