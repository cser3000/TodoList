import './Todos.css';
import Todo from "../Todo";

function Todos({todo, onDelete, onChange, onSetTodo}) {

    return (
      <main className="todoMain">
          <h1>Задачи</h1>
          <ul className="todos">
              {todo.map( (data) => {
                  return <Todo key={data.id} data={data}
                               onDelete={onDelete} onChange={onChange}
                               allData={todo} onSetTodo={onSetTodo}/>
              })}
          </ul>
      </main>
    );
}

export default Todos;