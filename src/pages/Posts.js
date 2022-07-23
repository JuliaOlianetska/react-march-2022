import {useState, useEffect} from "react";
import {Outlet, useParams, useLocation} from "react-router-dom";

import ApiService from "../service/api.service";
import Post from "../components/Post";

export default function Posts () {

    let {postId} = useParams();
    let [posts, setPosts] = useState([]);
    let apiService = new ApiService('posts');
    useEffect(()=> {
        apiService.getSingle(postId).then(value => setPosts([{...value}]))
    }, [postId])

    return (
      <div>
          {posts.map(post=> <Post key={post.id} post={post}/>)}
      </div>
    );
}