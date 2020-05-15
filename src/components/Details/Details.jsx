import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <div>
                <h1>Details</h1>
                <Link to="/"><button>Back</button></Link>
            </div>
        )
    }
}

export default Details;
