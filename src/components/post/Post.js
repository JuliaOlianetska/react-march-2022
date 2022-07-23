import React, {Component} from 'react';

class Post extends Component {

constructor(props, context) {
    super(props, context);
    this.post = this.props.post;
}

    render() {
        return (
            <div>
                <p>{this.post.id} - {this.post.title}</p>
                <p>post body: {this.post.body}</p>
                ----------------------
            </div>
        );
    }
}

export default Post;