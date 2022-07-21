import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import "./components/Components.css"

function App() {
    return (
        <div className={'wrap'}>
            <Users/>
            <Comments/>
        </div>
    );
}

export default App;
