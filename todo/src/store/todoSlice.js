import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        getTodos(state, action) {
            state.todos = action.payload;
        },
        addTodo(state, action) {
            state.todos.unshift(action.payload);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((el) => el.id !== action.payload);
        },
        updateTodos(state, action) {
            state.todos = state.todos.reduce((acc, curr) => {
                action.payload.id === curr.id ? acc.push(action.payload) : acc.push(curr)
                return acc
            }, [])
        },
    }
});

export const {getTodos, addTodo, removeTodo, updateTodos} = todoSlice.actions;

export default todoSlice.reducer;