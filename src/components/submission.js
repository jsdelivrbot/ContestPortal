import React, {Component} from 'react';


const getSubmission = (submissionId) => {

    fetch("http://5f143cd2.problems.sphere-engine.com/api/v3/submissions/"+submissionId+"?access_token=358102489eab046820e65ce57ec00ee1")
        .then(response => response.text())
        .then(contents => {
            console.log(contents);
            let js= JSON.parse(contents);
            document.getElementById("probName").innerHTML = js.problem.name;
            document.getElementById("source").innerHTML = js.source;
        })
        .catch(() => console.log("Can’t access response. Blocked by browser?"));
};


class Submission extends Component{
    constructor(props){
        super(props);
        getSubmission(this.props.match.params.submission);
    }

    render(){
        getSubmission(this.props.match.params.submission);
        console.log(this.props);
        return(
            <div>
                <div id = "probName">ProblemCode</div>
                <div>TestCaseTable</div>
                <div id="source">SourceCode</div>
            </div>
        )
    }
}

export default Submission;