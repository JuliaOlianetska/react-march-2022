export default function Post ({post}) {

    return (
        <div>
            <h6>{post.id} - {post.title}</h6>
            <p>post body: {post.body}</p>
        </div>
    );
}