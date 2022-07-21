import {useEffect, useState} from "react";

import User from "../user/User";
import {getUsers} from "../../services";

export default function Users ({getAllPostsOfUser}) {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(({data}) =>
            setUsers([...data]));
    }, [])

    return (
        <div>
            {
                users.map(user=> <User key={user.id} user={user} getAllPostsOfUser={getAllPostsOfUser}/>)
            }
        </div>
    );
}