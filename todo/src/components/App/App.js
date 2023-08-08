import './App.css';
import Header from "../Header";
import Todos from "../Todos";
import {useEffect, useState} from "react";

function App() {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log({data});
                setTodo(data)
            });
    }, []);

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
            <Header onChange={handleTodoChange}/>
            <Todos todo={todo} onDelete={onDelete}/>
        </>
    );
}

export default App;
