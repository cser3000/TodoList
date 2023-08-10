import './App.css';
import Header from "../Header";
import Todos from "../Todos";
import {useEffect, useState} from "react";
import {GETINFO, DELETE, POST, PUT} from "../../servise/servise";

function App() {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        GETINFO()
            .then( (data) => setTodo(data.reverse()) );
    }, []);

    const onDelete = (key) => {
        DELETE(key)
            .then( () => setTodo(todo.filter( (el) => el.id !== key) ) );
    }

    const handleTodoChange = (title, description) => {
        POST(title, description)
            .then( (info) => {
                setTodo([info, ...todo])
            } );
    }

    const handleChange = (data, property) => {
        PUT(data, property)
            .then(res => {
                setTodo(todo.reduce((acc, curr) => {
                    res.id === curr.id ? acc.push(res) : acc.push(curr)
                    return acc
                }, []))
            })
    }

    return (
        <>
            <Header onChange={handleTodoChange}/>
            <Todos todo={todo} onDelete={onDelete} onChange={handleChange}/>
        </>
    );
}

export default App;
