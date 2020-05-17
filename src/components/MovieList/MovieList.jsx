import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import {connect} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//   }),
// );

class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    render() {
        return (
            <>
                {/* <h1>Movies</h1> */}
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