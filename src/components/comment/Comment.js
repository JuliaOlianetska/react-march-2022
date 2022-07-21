export default function Comment ({comment}) {

    return (
      <div>
          comment id: {comment.id} - post id: {comment.postId} - {comment.name} - comment body: {comment.body}
      </div>
    );
}