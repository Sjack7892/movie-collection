import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class MovieItem extends Component {
    
    handleClick = () => {
        this.props.dispatch({
            type: 'SEND_DETAILS',
            payload: this.props.movieData
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.movieData.title}</h3>
                <Link to="/details"><img onClick={this.handleClick} src={this.props.movieData.poster} alt={this.props.movieData.title}/></Link>
            </div>
        )
    }
}

export default connect()(MovieItem);
