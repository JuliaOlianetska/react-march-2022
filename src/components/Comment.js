import {Link} from "react-router-dom";

export default function Comment({comment}) {

    return (
        <div>
            {comment.id} - {comment.name} - post ID: {comment.postId} <span> <Link to={comment.postId.toString()}>post</Link>
            </span>
        </div>
    );
}