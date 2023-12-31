import "./CreateTodoForm.css";
import {useState} from "react";

function CreateTodoForm({onChange, onClose, data}) {

    let [title, setTitle] = useState(data ? data.title : '');
    let [description, setDescription] = useState(data ? data.description : '');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleTodoChange = () => {
        onChange(title, description);
        onClose();
    }

    return (
        <>
            <form className="createForm">
                <h3 className="textName">Title:</h3>
                <input className="inputText" onChange={handleTitleChange} value={title}/>
                <h3 className="textName">Description:</h3>
                <input className="inputText" onChange={handleDescriptionChange} value={description}/>
            </form>
            <div className="formButtons">
                <button className="addButton" onClick={handleTodoChange}>
                    add
                </button>
                <button className="closeButton" onClick={() => onClose()}>
                    close
                </button>
            </div>
        </>

    )
}

export default CreateTodoForm;