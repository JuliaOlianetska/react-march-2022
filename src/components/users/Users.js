import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {addUser, getUsers} from "../../services/user.service";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let {register, handleSubmit, formState: {errors}} = useForm();
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, [])

    const submit = (user) => {
        addUser(user).then(({data}) => setUser({...data}));
    }

    return (
        <div>
            <div>{
                users.map(user => <User key={user.id} user={user}/>)
            }</div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/>
                {errors.name && <p>please add user name</p>}
                <input type="text" {...register('email', {required: true})}/>
                {errors.email && <p>please add user's email</p>}
                <button>save</button>
            </form>
            {user && <User user={user}/>}
        </div>
    );
}