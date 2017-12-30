import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Rules extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <Link to='/contest/QUES1'>Continue to Contest</Link>
                </div>
                <div>
                    <p>
                        ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC
                    </p>
                </div>
            </div>
        )
    }
}

export default Rules;