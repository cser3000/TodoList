import './App.css';
import Header from "../Header";
import Todos from "../Todos";
import {useEffect, useState} from "react";
import {getAll, remove, create, update} from "../../servise/servise";

function App() {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        getAll()
            .then((data) => setTodo(data.reverse()));
    }, []);

    const onDelete = (key) => {
        remove(key)
            .then(() => setTodo(todo.filter((el) => el.id !== key)));
    }

    const handleTodoChange = (title, description) => {
        create(title, description)
            .then((info) => {
                setTodo([info, ...todo])
            });
    }

    const handleChange = (data, property) => {
        update(data, property)
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
            <Todos todo={todo} onDelete={onDelete} onChange={handleChange} onSetTodo={setTodo}/>
        </>
    );
}

export default App;