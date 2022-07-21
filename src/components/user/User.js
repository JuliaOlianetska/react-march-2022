export default function User({user, userDetails}) {

    return (
        <div>
            <h3>user name: {user.name}, user id: {user.id}</h3>
            <button onClick={() => {
                userDetails(user)
            }}>user details
            </button>
        </div>
    );
}