export default function Userdetails({user}) {

    return (
        <div>
            <h4>{user.name}</h4>
            <p>email: {user.email}</p>
            <p>address: city {user.address.city}, street {user.address.street}, {user.address.suite} </p>
            <p>phone: {user.phone}</p>
            <p>website: {user.website}</p>
            <p>company name: {user.company.name}</p>
        </div>
    );
}