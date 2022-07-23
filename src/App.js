import {Link, Route, Routes} from "react-router-dom";

import Todos from "./pages/Todos";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>

        <div>

          <h2>menu</h2>
          <li><Link to={'/todos'}>TODOS</Link></li>
          <li><Link to={'/albums'}>ALBUMS</Link></li>
          <li><Link to={'/comments'}>COMMENTS</Link></li>
        </div>
<div>
    <Routes>
        <Route path={'/todos'} element={<Todos/>}/>
        <Route path={'/albums'} element={<Albums/>}/>
        <Route path={'/comments'} element={<Comments/>}>
            <Route path={':postId'} element={<Posts/>}/>
        </Route>
    </Routes>


</div>


    </div>
  );
}

export default App;
