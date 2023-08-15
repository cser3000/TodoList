import {createSlice} from "@reduxjs/toolkit";
import {create, getAll, remove, update} from "../servise/servise";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: getAll()
            .then((data) => data.reverse())
    },
    reducers: {
        addTodo(state, action) {
            create(action.payload.title, action.payload.description)
                .then((info) => {
                    state.todos.push(info);
                });
        },
        removeTodo(state, action) {
            remove(action.payload.key)
                .then(() => {
                    state.todos = state.todos.filter((el) => el.id !== action.payload.key)
                });
        },
        updateTodos(state, action) {
            update(action.payload.data, action.payload.property)
                .then(res => {
                    state.todos.reduce((acc, curr) => {
                        res.id === curr.id ? acc.push(res) : acc.push(curr)
                        return acc
                    }, [])
                })
        }
    }
});

export const {addTodo, removeTodo, updateTodos} = todoSlice.actions;

export default todoSlice.reducer;