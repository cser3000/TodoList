import './Todos.css';
import Todo from "../Todo";

function Todos({todo, onDelete}) {

    return (
      <main className="todoMain">
          <h1>Задачи</h1>
          <ul className="todos">
              {todo.map( (todo) => <Todo key={todo.id} data={todo} onDelete={onDelete}/>)}
          </ul>
      </main>
    );
}

export default Todos;