import './Todos.css';
import Todo from "../Todo";

function Todos({todo, onDelete}) {




    //setTodo([...todo, {id: createID(), title: title, description: description}])

    //const onDelete = (key) => {
    //    setTodo(todo.filter((el) => el.id !== key))
    //}

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