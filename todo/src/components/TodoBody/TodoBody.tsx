import "./TodoBody.css";
import {removeItem, updateItem} from "../../store/todoThunk";
import {PencilSvg, CompletedSvg, RemoveSvg, StarSvg} from "../../assets/icons/icons";
import {useAppDispatch} from "../../hook";
import {Todo} from "../../store/todoSlice";

function TodoBody({data, onOpenClose}): JSX.Element {

    const dispatch = useAppDispatch();

    const updateTodos = (data: Todo, property: Todo): void => {
        dispatch(updateItem(data, property));
    }

    const deleteTodo = (key: number): void => {
        dispatch(removeItem(key));
    }

    return (
        <>
            <div className="buttons">
                <button
                    className="todoButton btn-yellow"
                    onClick={(): void => {
                        onOpenClose();
                    }}
                >
                    <PencilSvg/>
                </button>
                <button
                    className="todoButton btn-green"
                    onClick={(): void => {
                        updateTodos(data, {"done": !data.done});
                    }}
                >
                    <CompletedSvg/>
                </button>
                <button
                    className="todoButton btn-blue"
                    onClick={(): void => {
                        updateTodos(data, {"important": !data.important});
                    }}
                >
                    <StarSvg/>
                </button>
                <button
                    className="todoButton btn-red"
                    onClick={(): void => {
                        deleteTodo(data.id);
                    }}
                >
                    <RemoveSvg/>
                </button>
            </div>
            <div className="todoTitle">
                <h3 className="textTodoTitle">{data.title}</h3>
            </div>
            <div className="todoDescription">
                {data.description}
            </div>
        </>
    )
}

export default TodoBody;