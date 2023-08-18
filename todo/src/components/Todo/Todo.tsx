import './Todo.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";
import {updateItem} from "../../store/todoThunk";
import TodoBody from "../TodoBody";
import {useAppDispatch} from "../../hook";

function Todo({data}): JSX.Element {

    const [redaction, setRedaction] = useState(false);

    const dispatch = useAppDispatch();

    const getClass = ({done, important}): string => {
        return done ? "todo todoDone" : important ? "todo todoImportant" : "todo";
    }

    const updateTodos = (property: object): void => {
        dispatch(updateItem(data, property));
    }

    const onOpenClose = (): void => {
        setRedaction(!redaction);
    }

    const editingForm: JSX.Element = (
        <CreateTodoForm onChange={updateTodos} onClose={onOpenClose} data={data}/>
    )

    const todo: JSX.Element = (
        <TodoBody data={data} onOpenClose={onOpenClose}></TodoBody>
    )

    return (
        <li className={getClass(data)}>
            {redaction ? editingForm : todo}
        </li>
    )
}

export default Todo;