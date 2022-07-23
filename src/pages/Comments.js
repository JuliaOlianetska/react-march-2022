import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

import {ApiService} from "../service/api.service";
import Comment from "../components/Comment";

export default function Comments () {

    let [comments, setComments] = useState([]);
    let apiservice = new ApiService('comments');
    useEffect(()=> {
        apiservice.getAll().then(value => setComments([...value]))
    }, [])

    return (
      <div>
          <Outlet/>
          {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}

      </div>
    );
}