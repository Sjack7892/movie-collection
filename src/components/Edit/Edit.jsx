import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';


class Edit extends Component {

    state = {
        title: this.props.title,
        description: this.props.description,
        id: this.props.id,
        poster: this.props.poster
    }

    onChangeTitle = (event) => {
        // Set local state to current input value.
        this.setState({
            title: event.target.value
        })
    }
    
    onChangeDescription = (event) => {
        // Set local state to current input value.
        this.setState({
            description: event.target.value
        })
    }

    handleClick = () => {
        // Send edited details to reduxState.
        this.props.dispatch({
            type: 'EDIT_DETAILS',
            payload: this.state
        })
    }

    render() {
        return (
            <div>
                <h1>Edit</h1>
                <h3>Title:</h3>
                <input onChange={this.onChangeTitle} value={this.state.title} type="text"></input>
                <h3>Description:</h3>
                <textarea onChange={this.onChangeDescription} value={this.state.description}></textarea>
                <br/>
                <br/>
                <Link to="/details"><Button variant="contained" color="primary">Cancel</Button></Link>
                <Link to="/details"><Button onClick={this.handleClick} variant="contained" color="primary">Save</Button></Link>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        title: reduxState.details.title,
        description: reduxState.details.description,
        id: reduxState.details.id,
        poster: reduxState.details.poster
    }
}

export default connect(putStateOnProps)(Edit);

