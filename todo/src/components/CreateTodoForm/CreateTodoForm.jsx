import "./CreateTodoForm.css";
import {useState} from "react";

function CreateTodoForm({onChange, onClouse}) {


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
        <>
            <form className="createForm">
                <h3 className="textName">Title:</h3>
                <input className="inputText" onChange={handleTitleChange} />
                <h3 className="textName">Description:</h3>
                <input className="inputText" onChange={handleDescriptionChange} />
            </form>
            <div className="formButtons">
                <button className="addButton" onClick={handleTodoChange}>
                    add
                </button>
                <button className="closeButton" onClick={onClouse}>
                    close
                </button>
            </div>
        </>

    )
}

export default CreateTodoForm;