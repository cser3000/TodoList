import './Todo.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";
import {PUT} from "../../servise/servise";

const PenselSvg = () => {
    return (
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.20999 20.5199C4.11375 20.521 4.01826 20.5029 3.92902 20.4669C3.83977 20.4308 3.75854 20.3775 3.68999 20.3099C3.61139 20.2323 3.55092 20.1383 3.51288 20.0346C3.47485 19.9308 3.4602 19.82 3.46999 19.7099L3.77999 15.8699C3.79328 15.6916 3.87156 15.5244 3.99999 15.3999L15.06 4.33995C15.6762 3.76286 16.4961 3.45361 17.34 3.47995C18.1784 3.48645 18.9828 3.81181 19.59 4.38995C20.1723 4.98795 20.5073 5.7839 20.5277 6.61837C20.5481 7.45284 20.2524 8.26421 19.7 8.88995L8.62999 19.9999C8.50609 20.1234 8.34386 20.201 8.16999 20.2199L4.27999 20.5699L4.20999 20.5199ZM5.20999 16.2599L4.99999 18.9999L7.73999 18.7499L18.64 7.82995C18.8525 7.57842 18.9884 7.27118 19.0314 6.94472C19.0745 6.61827 19.0229 6.28631 18.8828 5.9883C18.7428 5.69028 18.5201 5.43873 18.2413 5.26354C17.9625 5.08834 17.6393 4.99685 17.31 4.99995C17.0936 4.98621 16.8766 5.01633 16.6721 5.0885C16.4676 5.16067 16.2798 5.27341 16.12 5.41995L5.20999 16.2599Z"
                fill="#000000"/>
        </svg>
    )
}

const CompliteSvg = () => {
    return (
        <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"/>
        </svg>
    )
}

const StarSvg = () => {
    return (

        <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"/>
        </svg>
    )
}

const RemoveSvg = () => {
    return (
        <svg fill="#000000" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/>
        </svg>
    )
}


function Todo({data, onDelete, onChange, allData, onSetTodo}) {

    const [redaction, setRedaction] = useState(false);

    const getClass = ({done, important}) => {
        return done ? "todo todoDone" : important ? "todo todoImportant" : "todo";
    }

    const handleTodoChange = (title, description) => {
        PUT(data, {title, description})
            .then(res => {
                onSetTodo(allData.reduce((acc, curr) => {
                    res.id === curr.id ? acc.push(res) : acc.push(curr)
                    return acc
                }, []))
            });
    }

    const onOpenClose = () => {
        setRedaction(!redaction);
    }

    const editingForm = <CreateTodoForm
        onChange={handleTodoChange} onClose={() => onOpenClose()} data={data}/>

    const todo = (
        <>
            <div className="buttons">
                <button className="todoButton btn-yellow" onClick={() => {
                    onOpenClose();
                }}><PenselSvg/></button>
                <button className="todoButton btn-green" onClick={() => {

                    onChange(data, {"done": !data.done});
                }}><CompliteSvg/></button>
                <button className="todoButton btn-blue" onClick={() => {
                    onChange(data, {"important": !data.important});
                }}><StarSvg/></button>
                <button className="todoButton btn-red" onClick={() => {
                    onDelete(data.id);
                }}><RemoveSvg/></button>
            </div>
            <div className="todoTitle">
                <h3 className="textTodoTitle">{data.title}</h3>

            </div>
            <div className="todoDescription">
                {data.description}
            </div>
        </>
    )

    return (
        <li className={getClass(data)}>
            {redaction ? editingForm : todo}
        </li>
    )
}

export default Todo;