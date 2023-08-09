import './Todo.css';
import {useState} from "react";

function Todo({data, onDelete}) {

    const [flag, setFlag] = useState(false)

    const [todo, setTodo] = useState('todo');

    return (
        <li className={todo}>
            <div className="todoTitle">
                <button className="btn-green" onClick={ () => {
                    setFlag(!flag);
                    flag ? setTodo("todo") : setTodo("todo todo-green");

                }}>сделано</button>
                <h3 className="textTodoTitle">{data.title}</h3>
                <button className="btn-blue" onClick={ () => {
                    setFlag(!flag);
                    flag ? setTodo("todo") : setTodo("todo todo-blue");

                }}>выделить</button>
                <button className="btn-red" onClick={ () => {
                    onDelete(data.id);
                }}>delete</button>
            </div>
            <div className="todoDescription">
                {data.description}
            </div>
        </li>
    )
}

export default Todo;