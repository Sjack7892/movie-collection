import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';

class Details extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.poster} alt={this.props.title}/>
                
                {this.props.genres.map((genre, index) => {
                    return (
                        <p key={index}><i>{genre.name}</i></p>
                    )
                })}

                <p>{this.props.description}</p>

                <Link to="/"><Button variant="contained" color="primary">Back</Button></Link>
                <Link to="/edit"><Button variant="contained" color="primary">Edit</Button></Link>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        title: reduxState.details.title,
        description: reduxState.details.description,
        poster: reduxState.details.poster,
        genres: reduxState.genres,
    }
}

export default connect(putStateOnProps)(Details);

