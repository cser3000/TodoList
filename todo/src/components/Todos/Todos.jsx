import './Todos.css';
import Todo from "../Todo";

function Todos({todo, onDelete, onChange, onSetTodo}) {

    return (
        <main className="todoMain">
            <div className="todoBlock">
                <h2>В работе</h2>
                <ul className="todos">
                    {todo.map((data) => {
                        return !data.done && !data.important ? <Todo key={data.id} data={data}
                                     onDelete={onDelete} onChange={onChange}
                                     allData={todo} onSetTodo={onSetTodo}/> : null;
                    })}
                </ul>
            </div>
            <div className="todoBlock">
                <h2>Важно</h2>
                <ul className="todos">
                    {todo.map((data) => {
                        return data.important && !data.done ? <Todo key={data.id} data={data}
                                     onDelete={onDelete} onChange={onChange}
                                     allData={todo} onSetTodo={onSetTodo}/> : null;
                    })}
                </ul>
            </div>
            <div className="todoBlock">
                <h2>Выполнено</h2>
                <ul className="todos">
                    {todo.map((data) => {
                        return data.done ? <Todo key={data.id} data={data}
                                     onDelete={onDelete} onChange={onChange}
                                     allData={todo} onSetTodo={onSetTodo}/> : null;
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Todos;