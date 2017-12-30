import React, {Component} from 'react';

import Timer from './timer.js';
import ProblemList from './problemlist';
import ContestBody from './contestBody';

class Contest extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.match.params.code);
        return(
            <div>
                <Timer/>
                <ProblemList />
                <ContestBody probCode = {this.props.match.params.code}/>
            </div>
        )
    }
}

export default Contest;