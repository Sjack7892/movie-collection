import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';




class Edit extends Component {

    state = {
        title: this.props.title,
        description: this.props.description,
        id: this.props.id
    }

    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
        console.log('onChange:', event.target.value);
    }
    
    onChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
        console.log('onChange:', event.target.value);
    }

    handleClick = () => {
        console.log(this.state.description, this.state.title)
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
                <Button onClick={this.handleClick} variant="contained" color="primary">Save</Button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        title: reduxState.details.title,
        description: reduxState.details.description,
        id: reduxState.details.id
    }
}

export default connect(putStateOnProps)(Edit);

