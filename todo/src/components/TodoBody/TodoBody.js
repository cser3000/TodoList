import "./TodoBody.css";
import {removeItem, updateItem} from "../../store/todoThunk";
import {useDispatch} from "react-redux";
import {CompliteSvg, PenselSvg, RemoveSvg, StarSvg} from "../../assets/icons/icons";

function TodoBody({data, onOpenClose}) {

    const dispatch = useDispatch();

    const updateTodos = (data, property) => {
        dispatch(updateItem(data, property));
    }

    const deleteTodo = (key) => {
        dispatch(removeItem(key));
    }

    return (
        <>
            <div className="buttons">
                <button
                    className="todoButton btn-yellow"
                    onClick={() => {
                        onOpenClose();
                    }}
                >
                    <PenselSvg/>
                </button>
                <button
                    className="todoButton btn-green"
                    onClick={() => {
                        updateTodos(data, {"done": !data.done});
                    }}
                >
                    <CompliteSvg/>
                </button>
                <button
                    className="todoButton btn-blue"
                    onClick={() => {
                        updateTodos(data, {"important": !data.important});
                    }}
                >
                    <StarSvg/>
                </button>
                <button
                    className="todoButton btn-red"
                    onClick={() => {
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