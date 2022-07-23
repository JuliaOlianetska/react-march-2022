import React, {Component} from 'react';

import {ApiService} from "../../services/api.service"
import Post from "../post/Post";

class Posts extends Component {

    state = {posts: []}

    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        this.apiService = new ApiService();
        this.apiService.getPosts().
        then(value => this.setState({posts:value}));
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default Posts;