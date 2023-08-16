import './Todo.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";
import {updateItem} from "../../store/todoThunk";
import {useDispatch} from "react-redux";
import TodoBody from "../TodoBody";


function Todo({data}) {

    const [redaction, setRedaction] = useState(false);

    const dispatch = useDispatch();

    const getClass = ({done, important}) => {
        return done ? "todo todoDone" : important ? "todo todoImportant" : "todo";
    }

    const updateTodos = (property) => {
        dispatch(updateItem(data, property));
    }

    const onOpenClose = () => {
        setRedaction(!redaction);
    }

    const editingForm = <CreateTodoForm
        onChange={updateTodos} onClose={onOpenClose} data={data}/>

    const todo = (
        <TodoBody data={data} onOpenClose={onOpenClose}></TodoBody>
    )

    return (
        <li className={getClass(data)}>
            {redaction ? editingForm : todo}
        </li>
    )
}

export default Todo;