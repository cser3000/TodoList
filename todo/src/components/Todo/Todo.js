import './Todo.css';

function Todo({data, onDelete, onChange}) {

    return (
        <li className={data.important ? "todo todoImportant" : "todo"}>
            <div className="todoTitle">
                <button className="btn-green" onClick={ () => {
                    onChange(data, "done");
                }}>сделано</button>
                <h3 className={data.done ? "textTodoTitle todoDone" : "textTodoTitle"}>{data.title}</h3>
                <button className="btn-blue" onClick={ () => {
                    onChange(data, "important");
                }}>выделить</button>
                <button className="btn-red" onClick={ () => {
                    onDelete(data.id);
                }}>delete</button>
            </div>
            <div className={data.done ? "todoDescription todoDone" : "todoDescription"}>
                {data.description}
            </div>
        </li>
    )
}

export default Todo;