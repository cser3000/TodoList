import './Todos.css';
import Todo from "../Todo";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

function Todos({todo, onDelete, onChange, onSetTodo}) {

    return (
        <main className="todoMain">
            <DragDropContext>
                <Droppable>
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
                </Droppable>
                <Droppable>
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
                </Droppable>
                <Droppable>
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
                </Droppable>
            </DragDropContext>

        </main>
    );
}

export default Todos;