import './Todo.css';

function Todo({data, onDelete, onChange}) {

    return (
        <li className={data.important ? "todo todoImportant" : "todo"}>
            <div className="buttons">
                <button className="btn-green" onClick={ () => {
                    onChange(data, "done");
                }}>сделано</button>
                <button className="btn-blue" onClick={ () => {
                    onChange(data, "important");
                }}>выделить</button>
                <button className="btn-red" onClick={ () => {
                    onDelete(data.id);
                }}>delete</button>
            </div>
            <div className="todoTitle">
                <h3 className={data.done ? "textTodoTitle todoDone" : "textTodoTitle"}>{data.title}</h3>

            </div>
            <div className={data.done ? "todoDescription todoDone" : "todoDescription"}>
                {data.description}
            </div>
        </li>
    )
}

export default Todo;