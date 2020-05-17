import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class MovieItem extends Component {
    
    handleClick = () => {
        console.log('image clicked!', this.props.movieData.id);
        this.props.dispatch({
            type: 'SEND_DETAILS',
            payload: this.props.movieData
        })
        // Redirect to details page.
        // this.props.history.push("/details");
    }

    render() {
        return (
            <div>
                <h3>{this.props.movieData.title}</h3>
                <Link to="/details"><img onClick={this.handleClick} src={this.props.movieData.poster} alt={this.props.movieData.title}/></Link>
                <p>{this.props.movieData.description}</p>
            </div>
        )
    }
}

export default withRouter(connect()(MovieItem));
