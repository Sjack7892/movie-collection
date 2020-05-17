import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>

                {this.props.genres.map((genre, index) => {
                    return (
                        <p key={index}>{genre.name}</p>
                    )
                })}

                <Link to="/"><button>Back</button></Link>
                <Link to="/edit"><button>Edit</button></Link>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        title: reduxState.details.title,
        description: reduxState.details.description,
        genres: reduxState.genres
    }
}

export default connect(putStateOnProps)(Details);

