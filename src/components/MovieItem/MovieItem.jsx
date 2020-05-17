import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class MovieItem extends Component {
    
    handleClick = () => {
        // Send movie details to reduxState.
        this.props.dispatch({
            type: 'SEND_DETAILS',
            payload: this.props.movieData
        })
    }

    render() {
        return (
            <div>
                <Link to="/details"><img className="image" onClick={this.handleClick} src={this.props.movieData.poster} alt={this.props.movieData.title}/></Link>
            </div>
        )
    }
}

export default connect()(MovieItem);
