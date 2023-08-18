import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Todo = {
    title?: string;
    description?: string;
    done?: boolean;
    important?: boolean;
    id?: number;
}

export type StateTodos = {
    todos: Todo[];
}

const initialState: StateTodos = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodos(state: StateTodos, action: PayloadAction<Todo[]>) {
            state.todos = action.payload;
        },
        addTodo(state: StateTodos, action: PayloadAction<Todo>) {
            state.todos.unshift(action.payload);
        },
        removeTodo(state: StateTodos, action: PayloadAction<number>) {
            state.todos = state.todos.filter((el) => el.id !== action.payload);
        },
        updateTodos(state: StateTodos, action: PayloadAction<Todo>) {
            state.todos = state.todos.reduce((acc: Todo[], curr: Todo) => {
                action.payload.id === curr.id ? acc.push(action.payload) : acc.push(curr)
                return acc
            }, [])
        },
    }
});

export const {
    getTodos,
    addTodo,
    removeTodo,
    updateTodos
} = todoSlice.actions;

export default todoSlice.reducer;