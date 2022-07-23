import React, {Component} from 'react';

class Comment extends Component {

    constructor(props, context) {
        super(props, context);
        this.comment = this.props.comment;
    }

    render() {
        return (
            <div>
                <p>{this.comment.id} - {this.comment.name}</p>
                <p>comment body: {this.comment.body}</p>
                ----------------
            </div>
        );
    }
}

export default Comment;