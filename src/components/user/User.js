export default function User ({user, getAllPostsOfUser}) {

    return (
        <div>
            <h4>{user.id} - {user.name}</h4>
            <button onClick={()=>{getAllPostsOfUser(user.id)}}>posts</button>
        </div>
    );
}