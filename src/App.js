import React, {Component} from "react";

import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

class App extends Component {

constructor(props) {
    super();
}


    render() {
        return (
            <div>
                <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;