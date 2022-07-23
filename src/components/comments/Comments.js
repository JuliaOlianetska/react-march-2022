import React, {Component} from 'react';

import {ApiService} from "../../services/api.service";
import Comment from "../comment/Comment";

class Comments extends Component {

    state = {comments: []};

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.apiService = new ApiService();
        this.apiService.getComments().then(value => this.setState({comments: value}));
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export default Comments;