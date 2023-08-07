import './App.css';
import Header from "../Header";
import Todos from "../Todos";
import {useState} from "react";

function App() {

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

    const handleTodoChange = (title, description) => {
        setTodo([...todo, {id: createID(), title: title, description: description}])
    }

    return (
        <>
            <Header onChange={handleTodoChange} />
            <Todos todo={todo} onDelete={onDelete} />
        </>
    );
}

export default App;
