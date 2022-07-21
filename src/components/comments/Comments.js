import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {addComment, getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);
    let {register, handleSubmit} = useForm();

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]))
    }, [])

    const submit = (comment) => {
        addComment(comment).then(({data}) => setComment({...data}))
    }

    return (
        <div>
            <div>
                <select {...register('post Id')}>
                    {
                        comments.map(comment => <option key={comment.id}
                                                        value={comment.postId}>{comment.postId}</option>)
                    }
                </select>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" {...register('name')}/>
                    <input type="text" {...register('body')}/>
                    <button>save</button>
                </form>
                <div>{comment && <Comment comment={comment}/>}</div>
                <div>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>
            </div>
        </div>
    );
}