import {useEffect, useState} from "react";

import {getUsers} from "../services/UserService";
import User from "../user/User";
import Userdetails from "../userDetails/Userdetails";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const userDetails = (obj) => {
        setUser(obj)
    }

    return (
        <div>
            {user.id && <Userdetails user={user}/>}
            {users.map(user => <User key={user.id} user={user} userDetails={userDetails}/>)}
        </div>
    );
}