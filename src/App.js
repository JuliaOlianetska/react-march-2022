import React, {Component} from "react";
import {Link, Routes, Route} from "react-router-dom";

import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

class App extends Component {

constructor(props) {
    super();
}


    render() {
        return (
            <div>
                <div>
                    <Link to={'/posts'}>POSTS</Link>
                    <br/>
                    <Link to={'/comments'}>COMMENTS</Link>
                </div>

                <div>
                    <Routes>
                        <Route path={'/posts'} element={<Posts/>}/>
                        <Route path={'/comments'} element={<Comments/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;