export default function Post ({post}) {

    return (
      <div>
          <p>post id: {post.id}</p>
          <p>post title: {post.title}</p>
          <p>post body: {post.body}</p>
      </div>
    );
}