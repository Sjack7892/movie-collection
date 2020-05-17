import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';


class Edit extends Component {
    render() {
        return (
            <div>
                <h1>Edit</h1>
                <h3>Title:</h3>
                <input value={this.props.title} type="text"></input>
                <h3>Description:</h3>
                <textarea value={this.props.description}></textarea>
                <br/>
                <br/>
                <Link to="/details"><Button variant="contained" color="primary">Cancel</Button></Link>
                <Button variant="contained" color="primary">Save</Button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        title: reduxState.details.title,
        description: reduxState.details.description
    }
}

export default connect(putStateOnProps)(Edit);

