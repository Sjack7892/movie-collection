import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class MovieItem extends Component {
    
    handleClick = () => {
        // Redirect to details page.
        this.props.history.push("/details");
    }

    render() {
        return (
            <div>
                <h3>{this.props.movieData.title}</h3>
                <img onClick={this.handleClick} src={this.props.movieData.poster} alt={this.props.movieData.title}/>
                <p>{this.props.movieData.description}</p>
            </div>
        )
    }
}

export default withRouter(MovieItem);
