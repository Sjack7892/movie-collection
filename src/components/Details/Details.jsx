import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
                <h1>Details</h1>
                <Link to="/"><button>Back</button></Link>
                <p>{this.props.details}</p>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        details: reduxState.details
    }
}

export default connect(putStateOnProps)(Details);

