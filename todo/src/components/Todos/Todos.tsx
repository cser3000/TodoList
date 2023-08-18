import './Todos.css';
import Todo from "../Todo";
import {useEffect} from "react";
import {getAllInfo} from "../../store/todoThunk";
import {useAppDispatch, useAppSelector} from "../../hook";

function Todos(): JSX.Element {
    const todos = useAppSelector(state => state.data.todos);
    const dispatch = useAppDispatch();

    useEffect((): void => {
        dispatch(getAllInfo())
    }, [dispatch]);

    return (
        <main className="todoMain">
            <h1>Задачи</h1>
            <ul className="todos">
                {todos.map((todo) => {
                    return <Todo key={todo.id} data={todo}/>
                })}
            </ul>
        </main>
    );
}

export default Todos;