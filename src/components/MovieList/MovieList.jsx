import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import {connect} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {
        return (
            <>
                <br/>
                <GridList cellHeight={340} cols={5}>
                {this.props.movies.map((movie, index) => {
                    return (
                        <GridListTile key={index}>
                            <MovieItem movieData={movie} />
                        </GridListTile>
                    )
                })}
                </GridList>
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