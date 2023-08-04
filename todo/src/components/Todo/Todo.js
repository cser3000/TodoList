import './Todo.css';

function Todo({data, onDelete}) {
    return (
        <li>
            <button>сделано</button>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <button>выделить</button>
            <button onClick={ () => {
                onDelete(data.id);
            }
            }>delete</button>
        </li>
    )
}

export default Todo;