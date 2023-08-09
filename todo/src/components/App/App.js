import './App.css';
import Header from "../Header";
import Todos from "../Todos";
import {useEffect, useState} from "react";
import {GETINFO, DELETE, POST} from "../../servise/servise";

function App() {

    const [todo, setTodo] = useState([])

    const url = "http://localhost:3000/posts"

    useEffect(() => {
        GETINFO(url, setTodo)
    }, []);

    const onDelete = (key) => {
        DELETE(url, key, setTodo, todo);
    }

    const handleTodoChange = (title, description) => {
        POST(url, title, description, setTodo, todo)
    }

    return (
        <>
            <Header onChange={handleTodoChange}/>
            <Todos todo={todo} onDelete={onDelete}/>
        </>
    );
}

export default App;
