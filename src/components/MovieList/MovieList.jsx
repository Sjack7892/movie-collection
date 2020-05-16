import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import {connect} from 'react-redux';

class MovieList extends Component {

    componentDidMount() {
        console.log('Movie List mounted!');
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {
        return (
            <>
                <h1>Movies</h1>
                
                {this.props.movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <MovieItem movieData={movie} />
                        </div>
                    )
                })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        movies: reduxState.movies
    }
}

export default connect(putStateOnProps)(MovieList);