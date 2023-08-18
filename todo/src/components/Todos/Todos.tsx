import './Todos.css';
import Todo from "../Todo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllInfo} from "../../store/todoThunk";
// import React = require('react');

function Todos() {
    // @ts-ignore
    const todos = useSelector(state => state.data.todos);
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllInfo())
    }, [dispatch]);

    return (
        <main className="todoMain">
            <h1>Задачи</h1>
            <ul className="todos">
                {todos.map((data) => {
                    return <Todo key={data.id} data={data}/>
                })}
            </ul>
        </main>
    );
}

export default Todos;