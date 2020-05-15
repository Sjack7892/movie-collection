import React, {Component} from 'react';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
    render() {
        return (
            <div>
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        )
    }
}

export default MovieList;