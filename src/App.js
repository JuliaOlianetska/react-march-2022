import {useState} from "react";

import Users from "./components/users/Users";
import Post from "./components/post/Post";
import {getPostsOfUser} from "./services";
import "./styles.css";

function App() {

    let [posts, setPosts] = useState([]);

    const getAllPostsOfUser = (id) => {
        getPostsOfUser(id).then(({data}) => setPosts([...data]));
    }


    return (
        <div className={'wrap'}>

            <div><Users getAllPostsOfUser={getAllPostsOfUser}/></div>
            <div><h4>Posts of User:</h4>
                {posts.map(post => <Post key={post.id} post={post}/>)}</div>
        </div>
    );
}

export default App;
