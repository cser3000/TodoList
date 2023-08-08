import './Header.css';
import {useEffect, useState} from "react";

function Header({onChange}) {

    let [title, setTitle] = useState();
    let [description, setDescription] = useState();

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleTodoChange = () => {
        onChange(title, description);
    }

    return (
        <header className="headerTodo">
            <form className="createForm">
                <h3>title:</h3>
                <input onChange={handleTitleChange} />
                <h4>description:</h4>
                <textarea onChange={handleDescriptionChange} />

            </form>
            <button className="createButton" onClick={handleTodoChange}>
                add
            </button>
        </header>
    )
}

export default Header;