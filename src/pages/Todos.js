import {useState, useEffect} from "react";

import {ApiService} from "../service/api.service";
import Todo from "../components/Todo";

export default function Todos () {

    let apiService = new ApiService('todos');
    let [todos, setTodos] = useState([]);
    useEffect(()=> {
apiService.getAll().then(value => setTodos([...value]))
    }, [])


    return (
      <div>
          {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
      </div>
    );
}