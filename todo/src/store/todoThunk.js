import {addTodo, getTodos, removeTodo, updateTodos} from "./todoSlice";
import {create, remove, getAll, update} from "../servise/servise";

export const getAllInfo = () => (dispatch) => {
    getAll()
        .then(data => dispatch(getTodos(data.reverse())))
}

export const createItem = (data) =>  (dispatch) => {
    create(data.title, data.description)
        .then(res => dispatch(addTodo(res)));
};

export const removeItem = (key) => (dispatch) => {
    remove(key)
        .then(() => {
            dispatch(removeTodo(key))
        })
}

export const updateItem = (data, property) => (dispatch) => {
    update(data, property)
        .then(res => dispatch(updateTodos(res)))
}