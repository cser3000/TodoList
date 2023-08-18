import {addTodo, getTodos, removeTodo, Todo, updateTodos} from "./todoSlice";
import {create, remove, getAll, update} from "../servise/servise";
import {Dispatch} from "@reduxjs/toolkit";

export const getAllInfo = () => (dispatch: Dispatch): void => {
    getAll()
        .then(data => dispatch(getTodos(data.reverse())))
}

export const createItem = (data: Todo) =>  (dispatch: Dispatch): void => {
    create(data.title, data.description)
        .then(res => dispatch(addTodo(res)));
};

export const removeItem = (key: number) => (dispatch: Dispatch): void => {
    remove(key)
        .then(() => {
            dispatch(removeTodo(key))
        })
}

export const updateItem = (data: Todo, property: Todo) => (dispatch: Dispatch): void => {
    update(data, property)
        .then(res => dispatch(updateTodos(res)))
}