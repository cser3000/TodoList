import './Todos.css';
import Todo from "../Todo";
import {useState} from "react";

function Todos() {
   let id = 100;

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: "title1",
            description: "description1",
        },
    ])

    const onDelete = (key) => {
        setTodo(todo.filter((el) => el.id !== key))
    }

    const createID = () => {
        return Math.random() * 1000;
    }

    return (
      <>
          <h1>Задачи</h1>
          <button onClick={ () => {
              setTodo([...todo, {id: createID(), title: 'aaa', description: 'bbb'}])
          }}>
              add2
          </button>
          <ul>
              {todo.map( (todo) => <Todo key={todo.id} data={todo} onDelete={onDelete}/>)}
          </ul>
      </>
    );
}

export default Todos;