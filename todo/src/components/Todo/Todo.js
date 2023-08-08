import './Todo.css';

function Todo({data, onDelete}) {
    return (
        <li className="todo">
            <button>сделано</button>
            <div className="todoContent">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <button>выделить</button>
            <button onClick={ () => {
                onDelete(data.id);
            }}>delete</button>
        </li>
    )
}

export default Todo;