import {addTodo, getTodos, removeTodo, Todo, updateTodos} from "./todoSlice";
import {create, remove, getAll, update} from "../servise/servise";

export const getAllInfo = () => (dispatch): void => {
    getAll()
        .then(data => dispatch(getTodos(data.reverse())))
}

export const createItem = (data: Todo) =>  (dispatch) => {
    create(data.title, data.description)
        .then(res => dispatch(addTodo(res)));
};

export const removeItem = (key) => (dispatch): void => {
    remove(key)
        .then(() => {
            dispatch(removeTodo(key))
        })
}

export const updateItem = (data: Todo, property: Todo) => (dispatch): void => {
    update(data, property)
        .then(res => dispatch(updateTodos(res)))
}