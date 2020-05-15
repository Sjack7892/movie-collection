import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MovieItem extends Component {

    render() {
        return (
            <div>
                <p><Link to="/details">Movie</Link></p>
            </div>
        )
    }
}

export default MovieItem;
