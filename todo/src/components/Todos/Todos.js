import './Todos.css';
import Todo from "../Todo";

function Todos({todo, onDelete}) {

    return (
      <>
          <h1>Задачи</h1>
          <ul>
              {todo.map( (todo) => <Todo key={todo.id} data={todo} onDelete={onDelete}/>)}
          </ul>
      </>
    );
}

export default Todos;